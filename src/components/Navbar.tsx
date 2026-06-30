import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkle } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Chatbot", href: "#chatbot" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Sparkle className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-heading font-semibold text-lg tracking-tight">
              EthicAI <span className="text-muted-foreground font-light">Chat</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#chatbot"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow hover:scale-[1.03] transition-transform"
          >
            Try Chatbot
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/90"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#chatbot"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center items-center px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium"
            >
              Try Chatbot
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
