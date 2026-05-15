import {
  Palette, Code2, Edit3, Building2, Briefcase, ShoppingBag, Search, Wrench, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Palette, title: "Professional Website Design", desc: "Modern, responsive, conversion-focused designs crafted to impress." },
  { icon: Code2, title: "Website Development", desc: "Powerful custom development with the latest technologies." },
  { icon: Edit3, title: "Website Editing & Redesign", desc: "Transform outdated websites into premium digital experiences." },
  { icon: Building2, title: "Business Websites", desc: "High-impact websites engineered for measurable business growth." },
  { icon: Briefcase, title: "Corporate Websites", desc: "Premium corporate presence that commands authority and trust." },
  { icon: ShoppingBag, title: "E-Commerce Websites", desc: "Beautiful online stores built to convert visitors into buyers." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google and attract qualified, ready-to-buy traffic." },
  { icon: Wrench, title: "Website Maintenance", desc: "Reliable, ongoing support keeping your site fast and secure." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">What We Do</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-5">
            Premium <span className="text-gradient-primary">Web Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end digital services engineered for professionals and ambitious brands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-gradient-card border border-border rounded-2xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-glow hover:border-accent/50"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center mb-5 shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <a href="#book" className="inline-flex items-center gap-1.5 text-sm text-gold font-medium opacity-0 group-hover:opacity-100 transition-smooth">
                Get started <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
