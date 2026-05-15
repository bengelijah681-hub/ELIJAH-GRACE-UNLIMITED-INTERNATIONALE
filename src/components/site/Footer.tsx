import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
                <span className="font-display font-bold text-gold-foreground">EG</span>
              </span>
              <div className="leading-tight">
                <div className="font-display font-semibold text-sm tracking-wide">ELIJAH GRACE</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Unlimited International</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-5">
              Premium professional web development & digital solutions trusted by businesses and
              professionals across Cameroon and beyond.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full glass grid place-items-center hover:bg-gradient-primary transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-smooth">About</a></li>
              <li><a href="#services" className="hover:text-foreground transition-smooth">Services</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-smooth">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-smooth">Testimonials</a></li>
              <li><a href="#book" className="hover:text-foreground transition-smooth">Book Consultation</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display font-semibold mb-4">Get in Touch</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+237670981189" className="hover:text-foreground">+237 670 981 189</a></li>
              <li><a href="https://wa.me/237689963319" className="hover:text-foreground">WhatsApp: 689 963 319</a></li>
              <li><a href="mailto:bengelijah681@gmail.com" className="hover:text-foreground break-all">bengelijah681@gmail.com</a></li>
              <li>Buea, Cameroon</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Elijah Grace Unlimited International. All rights reserved.</p>
          <p className="text-xs text-muted-foreground italic">"Committed to Excellence, Innovation & Professional Web Solutions."</p>
        </div>
      </div>
    </footer>
  );
}
