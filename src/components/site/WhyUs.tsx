import { Award, Shield, Rocket, Smartphone, Search, Headphones, Target, Lock, Clock, Sparkles } from "lucide-react";

const items = [
  { icon: Award, title: "10+ Years Experience" },
  { icon: Shield, title: "Trusted Reputation" },
  { icon: Sparkles, title: "High-Level Commitment" },
  { icon: Target, title: "Premium Website Quality" },
  { icon: Rocket, title: "Fast Delivery" },
  { icon: Search, title: "SEO Optimization" },
  { icon: Smartphone, title: "Mobile Responsive" },
  { icon: Lock, title: "Security & Reliability" },
  { icon: Headphones, title: "Long-Term Support" },
  { icon: Clock, title: "Conversion-Focused" },
];

export function WhyUs() {
  return (
    <section className="relative py-28 bg-card/40">
      <div className="absolute inset-0 code-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Why Choose Us</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Why Clients <span className="text-gradient-gold">Trust Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((i) => (
            <div key={i.title} className="glass rounded-2xl p-5 text-center hover:border-gold/40 transition-smooth">
              <div className="h-11 w-11 rounded-xl bg-gradient-gold mx-auto grid place-items-center mb-3 shadow-gold">
                <i.icon className="h-5 w-5 text-gold-foreground" />
              </div>
              <div className="text-sm font-medium">{i.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
