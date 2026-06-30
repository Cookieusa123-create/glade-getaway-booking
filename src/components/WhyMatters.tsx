import { TrendingUp, AlertTriangle, Users2, Globe2 } from "lucide-react";

const reasons = [
  { icon: TrendingUp, title: "AI is everywhere", desc: "From hiring to healthcare, algorithms now influence decisions that shape lives." },
  { icon: AlertTriangle, title: "Risks are real", desc: "Biased models, opaque systems, and privacy erosion can cause measurable harm." },
  { icon: Users2, title: "People deserve a voice", desc: "Ethics gives the public a seat at the table — not just the engineers." },
  { icon: Globe2, title: "The stakes are global", desc: "Decisions made today about AI will shape society for generations." },
];

export default function WhyMatters() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Why It Matters</div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-5">
            AI is shaping the future.{" "}
            <span className="gradient-text">Ethics decides whose.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            As AI becomes more powerful, the world needs tools that help people think critically
            about fairness, accountability, privacy, and social impact — not just performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="glass-card p-6 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-secondary/70 border border-border/60 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
