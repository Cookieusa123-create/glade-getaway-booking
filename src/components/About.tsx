import { CheckCircle2 } from "lucide-react";

const points = [
  "Designed for students, developers, businesses, and the curious",
  "Balanced perspectives — never preachy, always nuanced",
  "Cites established frameworks like EU AI Act and NIST AI RMF",
  "Always available, always free to explore",
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-primary opacity-15 blur-3xl rounded-full" />
          <div className="relative glass-card p-10">
            <div className="grid grid-cols-2 gap-5">
              {[
                { v: "EU AI Act", l: "Regulatory framework" },
                { v: "NIST AI RMF", l: "Risk management" },
                { v: "IEEE EAD", l: "Design principles" },
                { v: "ISO 42001", l: "Management standard" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-secondary/40 p-5">
                  <div className="font-heading text-lg font-semibold">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-xl bg-gradient-primary/10 border border-primary/20">
              <p className="text-sm italic text-foreground/80">
                "AI ethics isn't a checklist — it's an ongoing conversation. EthicAI Chat is
                here to help you have it."
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">About</div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            Built to <span className="gradient-text">educate, not preach.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            EthicAI Chat exists to make ethical reasoning about artificial intelligence
            approachable for everyone — from first-year computer science students to senior
            policy makers. We believe responsible AI starts with better questions, not better
            slogans.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
