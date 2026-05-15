import { Star, BadgeCheck } from "lucide-react";

const items = [
  {
    name: "Dr. Mbeng A.",
    role: "Medical Doctor",
    initials: "MA",
    quote: "Professional, reliable, and highly committed. Elijah Grace Unlimited International transformed our online presence beautifully.",
  },
  {
    name: "Barr. Tabe N.",
    role: "Barrister & Solicitor",
    initials: "TN",
    quote: "Exceptional professionalism and attention to detail. Highly trustworthy — our firm now has a website that truly reflects our standards.",
  },
  {
    name: "Mrs. Eposi K.",
    role: "Business Owner",
    initials: "EK",
    quote: "Our business grew significantly after our website launch. The team is responsive, brilliant, and a true partner.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Testimonials</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-gradient-card border border-border rounded-3xl p-7 shadow-card hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-gradient-primary grid place-items-center font-display font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <div className="font-medium">{t.name}</div>
                    <BadgeCheck className="h-4 w-4 text-accent" />
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
