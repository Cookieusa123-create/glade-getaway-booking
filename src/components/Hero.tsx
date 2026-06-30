import { ArrowRight, Shield, Sparkles } from "lucide-react";

const sampleChat = [
  { role: "user", text: "What are the ethical risks of facial recognition?" },
  {
    role: "assistant",
    text:
      "Facial recognition raises four key concerns: (1) accuracy disparities across demographics, (2) consent and surveillance creep, (3) data retention risks, and (4) chilling effects on free assembly. Frameworks like the EU AI Act classify many uses as high-risk.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-60 pointer-events-none" />
      <div className="container relative grid lg:grid-cols-[1.05fr,1fr] gap-14 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Trusted AI ethics guidance, powered by responsible AI
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-6">
            Navigate AI Ethics with{" "}
            <span className="gradient-text">Confidence.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-9">
            EthicAI Chat is your intelligent companion for understanding bias, privacy,
            transparency, and the real-world impact of artificial intelligence — so you can
            make responsible decisions with clarity.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#chatbot"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition-transform"
            >
              Try the Ethics Chatbot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass text-foreground font-medium hover:bg-secondary/40 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "12+", v: "Ethics topics" },
              { k: "24/7", v: "Available" },
              { k: "Free", v: "To explore" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-heading text-2xl font-semibold gradient-text">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chat preview card */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-[3rem] pointer-events-none" />
          <div className="relative glass-card p-5 md:p-6">
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium">EthicAI Assistant</div>
                  <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online
                  </div>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-accent" />
            </div>

            <div className="py-5 space-y-4">
              {sampleChat.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary/70 text-foreground rounded-bl-md"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-1.5 pl-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow [animation-delay:200ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow [animation-delay:400ms]" />
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 p-2 rounded-xl bg-background/60 border border-border">
              <input
                placeholder="Ask about AI ethics…"
                className="flex-1 bg-transparent outline-none px-2 text-sm placeholder:text-muted-foreground"
                readOnly
              />
              <a
                href="#chatbot"
                className="px-3 py-1.5 rounded-lg bg-gradient-primary text-primary-foreground text-xs font-medium"
              >
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
