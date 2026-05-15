import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { img: p1, title: "Corporate Business Site", tag: "Business" },
  { img: p2, title: "Medical Clinic Platform", tag: "Healthcare" },
  { img: p3, title: "Luxury Law Firm", tag: "Legal" },
  { img: p4, title: "Premium E-Commerce Store", tag: "E-Commerce" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Our Work</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl">
              Crafted with <span className="text-gradient-primary">Precision</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A showcase of websites delivered for professionals, businesses, and organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-glow transition-smooth">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gold mb-1">{it.tag}</div>
                  <h3 className="font-display font-semibold text-xl">{it.title}</h3>
                </div>
                <div className="h-11 w-11 rounded-full glass grid place-items-center group-hover:bg-gradient-primary transition-smooth">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
