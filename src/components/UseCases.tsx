import { GraduationCap, Code2, Briefcase, Microscope, Users } from "lucide-react";

const cases = [
  { icon: GraduationCap, who: "Students", desc: "Build a strong foundation in AI ethics for coursework, papers, and debates." },
  { icon: Code2, who: "Developers", desc: "Ship responsibly with practical guidance on bias, evaluation, and deployment." },
  { icon: Briefcase, who: "Businesses", desc: "Stress-test AI decisions before they hit customers, regulators, or the press." },
  { icon: Microscope, who: "Researchers", desc: "Explore the ethical edges of your work — from data sourcing to publication." },
  { icon: Users, who: "Everyone else", desc: "Curious about AI? Get clear, honest answers to questions that actually matter." },
];

export default function UseCases() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Who It's For</div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight">
              Built for{" "}
              <span className="gradient-text">anyone shaping AI's future.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            EthicAI Chat meets you where you are — whether you're writing your first essay or
            shipping your hundredth model.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div
              key={c.who}
              className={`glass-card p-7 ${i === 0 ? "lg:row-span-2 bg-gradient-primary/10 border-primary/30" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{c.who}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
