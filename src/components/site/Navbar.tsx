import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="h-9 w-9 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
            <span className="font-display text-gold-foreground font-bold">EG</span>
          </span>
          <div className="leading-tight">
            <div className="font-display font-semibold text-sm tracking-wide">ELIJAH GRACE</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Unlimited International</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="default">
            <a href="#book">Book Consultation</a>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground py-1.5">
              {l.label}
            </a>
          ))}
          <Button asChild variant="hero" className="w-full">
            <a href="#book" onClick={() => setOpen(false)}>Book Consultation</a>
          </Button>
        </div>
      )}
    </header>
  );
}
