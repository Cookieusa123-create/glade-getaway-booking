import { Sparkle, Github, Twitter, Linkedin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 mt-12">
      <div className="container py-14">
        <div className="grid md:grid-cols-[1.4fr,1fr,1fr,1fr] gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Sparkle className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-heading font-semibold text-lg">
                EthicAI <span className="text-muted-foreground font-light">Chat</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              An AI-powered companion for navigating the ethics of artificial intelligence —
              built to help everyone think more clearly about the technology shaping our world.
            </p>
            <div className="flex gap-2 mt-5">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Product"
            items={[
              { l: "Chatbot", h: "#chatbot" },
              { l: "Features", h: "#features" },
              { l: "Use Cases", h: "#chatbot" },
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              { l: "About", h: "#about" },
              { l: "Why It Matters", h: "#features" },
              { l: "Contact", h: "mailto:hello@ethicai.chat" },
            ]}
          />
          <FooterCol
            title="Resources"
            items={[
              { l: "EU AI Act", h: "https://artificialintelligenceact.eu/" },
              { l: "NIST AI RMF", h: "https://www.nist.gov/itl/ai-risk-management-framework" },
              { l: "IEEE EAD", h: "https://standards.ieee.org/industry-connections/ec/autonomous-systems/" },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© 2026 EthicAI Chat. Built for responsible AI exploration.</p>
          <p>Educational tool. Not legal or compliance advice.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; h: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-foreground mb-4 font-medium">
        {title}
      </div>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.l}>
            <a
              href={i.h}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {i.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
