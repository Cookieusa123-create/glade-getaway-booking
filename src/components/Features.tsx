import { Brain, Scale, Lock, Eye, MessageCircle, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Responsible AI Guidance",
    desc: "Grounded answers that help you weigh trade-offs, not just follow rules.",
  },
  {
    icon: Scale,
    title: "Bias & Fairness Education",
    desc: "Understand how bias enters AI systems and the techniques used to mitigate it.",
  },
  {
    icon: Lock,
    title: "Privacy & Data Awareness",
    desc: "Explore consent, data minimization, and what 'private by design' really means.",
  },
  {
    icon: Eye,
    title: "Transparency & Explainability",
    desc: "Learn why explainable AI matters and how interpretability tools work in practice.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Ethical Support",
    desc: "Get instant, conversational help thinking through ethical scenarios.",
  },
  {
    icon: GraduationCap,
    title: "Beginner-Friendly Explanations",
    desc: "Complex ideas explained in plain language — without losing the nuance.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Capabilities</div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Everything you need to think{" "}
            <span className="gradient-text">clearly about AI.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Six focused capabilities, one conversational interface — built for clarity, depth,
            and trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass-card p-7 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
