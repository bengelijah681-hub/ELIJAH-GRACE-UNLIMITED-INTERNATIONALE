import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Star, Zap, ShieldCheck, Sparkles } from "lucide-react";

const trust = [
  { icon: Star, label: "10+ Years Experience" },
  { icon: ShieldCheck, label: "Trusted by Professionals" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Sparkles, label: "Premium Quality" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 code-grid opacity-40" />

      {/* Floating badges */}
      <div className="absolute top-32 right-10 hidden lg:flex animate-float">
        <div className="glass rounded-2xl px-4 py-3 flex items-center gap-2 shadow-card">
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">{`<live/> projects shipped`}</span>
        </div>
      </div>
      <div className="absolute bottom-40 left-10 hidden lg:flex animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="glass rounded-2xl px-4 py-3 shadow-card">
          <div className="text-xs text-muted-foreground">Avg. delivery</div>
          <div className="font-display font-bold text-gold">7 days</div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Premium Web Solutions · Buea, Cameroon
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6">
            Building <span className="text-gradient-gold">Powerful</span>, Professional &{" "}
            <span className="text-gradient-primary">Trustworthy</span> Websites That Grow Your Business
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            ELIJAH GRACE UNLIMITED INTERNATIONAL delivers world-class website creation, editing,
            and digital solutions with unmatched professionalism, trust, and commitment.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button asChild variant="hero" size="xl">
              <a href="#book">Book A Website Consultation</a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#portfolio">View Our Portfolio</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5 glass rounded-xl px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                <span className="text-xs sm:text-sm font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
