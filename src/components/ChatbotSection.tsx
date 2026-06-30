import { useEffect, useRef, useState } from "react";
import { Send, Shield, Sparkles, RefreshCw } from "lucide-react";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What are the ethical risks of facial recognition?",
  "How can AI systems reduce bias?",
  "Why is transparency important in AI?",
  "How should companies handle AI and user privacy?",
];

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hi — I'm EthicAI. Ask me anything about responsible AI: bias, fairness, privacy, transparency, accountability, or AI's social impact. Try a suggestion below or type your own question.",
};

export default function ChatbotSection() {
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    setInput("");
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setLoading(true);
    // Add empty assistant placeholder we'll stream into
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) {
        if (res.status === 429) toast.error("Rate limit reached. Please wait a moment.");
        else if (res.status === 402) toast.error("AI credits exhausted. Please add credits.");
        else toast.error("The assistant couldn't respond. Please try again.");
        setMessages((m) => m.slice(0, -1));
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const raw of lines) {
          const line = raw.trim();
          if (!line.startsWith("data:")) continue;
          const data = line.slice(5).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              acc += delta;
              setMessages((m) => {
                const copy = m.slice();
                copy[copy.length - 1] = { role: "assistant", content: acc };
                return copy;
              });
            }
          } catch {
            /* ignore parse errors on partial chunks */
          }
        }
      }
    } catch (e) {
      toast.error("Network error. Please try again.");
      setMessages((m) => m.slice(0, -1));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chatbot" className="py-24 lg:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent" /> Live AI Assistant
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Ask the <span className="gradient-text">Ethics Chatbot</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real conversations with a real model. Explore complex questions about responsible AI
            and get balanced, nuanced answers in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.6fr] gap-6">
          {/* Sidebar / suggestions */}
          <aside className="glass-card p-6 flex flex-col gap-5 h-fit">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium">EthicAI Assistant</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Ready to help
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I cite frameworks like the EU AI Act and NIST AI RMF to help you reason through
              ethical questions — without telling you what to think.
            </p>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                Try asking
              </div>
              <div className="flex flex-col gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    disabled={loading}
                    className="text-left text-sm px-3 py-2.5 rounded-xl bg-secondary/40 hover:bg-secondary/70 border border-border/60 transition-colors disabled:opacity-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setMessages([WELCOME])}
              disabled={loading}
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2 disabled:opacity-50"
            >
              <RefreshCw className="w-3 h-3" /> New conversation
            </button>
          </aside>

          {/* Chat panel */}
          <div className="glass-card flex flex-col h-[600px] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/60">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                Conversation
              </div>
              <div className="text-xs text-muted-foreground">Powered by Lovable AI</div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-gradient-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary/60 text-foreground rounded-bl-md"
                    }`}
                  >
                    {m.content || (
                      <span className="inline-flex gap-1 items-center text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow [animation-delay:200ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow [animation-delay:400ms]" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-border/60 p-4 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI ethics…"
                disabled={loading}
                className="flex-1 bg-background/60 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/60 placeholder:text-muted-foreground disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
