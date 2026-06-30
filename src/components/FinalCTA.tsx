import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="relative glass-card overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-15 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-60 pointer-events-none" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
              Ready when you are
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight mb-5 max-w-3xl mx-auto">
              Start Asking Better{" "}
              <span className="gradient-text">Questions About AI.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Open the chatbot, pick a topic, and explore the ethics behind the technology
              shaping your world.
            </p>
            <a
              href="#chatbot"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition-transform"
            >
              Open the Chatbot
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
