import founder from "@/assets/founder.jpg";
import { Award, Users, Briefcase, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Briefcase, value: "100+", label: "Projects Completed" },
  { icon: Users, value: "98%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "24/7", label: "Premium Support" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={founder} alt="Elijah Grace, Founder & Lead Web Developer" width={1024} height={1024} loading="lazy" className="w-full" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-gold max-w-[220px]">
              <div className="text-gradient-gold font-display font-bold text-3xl">10+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                Years of Professional Excellence
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">About Us</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 leading-tight">
              A Decade of <span className="text-gradient-primary">Premium Web Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ELIJAH GRACE UNLIMITED INTERNATIONAL has spent over a decade helping businesses,
              professionals, doctors, barristers, entrepreneurs, and organizations establish a
              powerful, trusted online presence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded by <span className="text-foreground font-medium">Elijah Grace</span>, a
              professional web developer with 10+ years of hands-on expertise, we are obsessed
              with one thing — delivering websites that build trust, drive conversions, and
              outperform expectations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5">
                  <s.icon className="h-6 w-6 text-gold mb-3" />
                  <div className="font-display font-bold text-3xl text-gradient-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
