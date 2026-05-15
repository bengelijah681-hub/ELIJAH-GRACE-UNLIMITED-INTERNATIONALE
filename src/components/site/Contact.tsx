import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const items = [
  { icon: Phone, label: "Call Us", value: "+237 670 981 189", href: "tel:+237670981189" },
  { icon: MessageCircle, label: "WhatsApp", value: "+237 689 963 319", href: "https://wa.me/237689963319" },
  { icon: Mail, label: "Email", value: "bengelijah681@gmail.com", href: "mailto:bengelijah681@gmail.com" },
  { icon: MapPin, label: "Location", value: "Buea, Cameroon", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Contact</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Let's Build Something <span className="text-gradient-gold">Great Together</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {items.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
               className="group bg-gradient-card border border-border rounded-2xl p-6 hover:border-gold/50 hover:shadow-gold transition-smooth">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center mb-4 shadow-glow group-hover:scale-110 transition-smooth">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{c.label}</div>
              <div className="font-medium break-words">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden border border-border shadow-elegant">
          <iframe
            title="Buea, Cameroon"
            src="https://www.openstreetmap.org/export/embed.html?bbox=9.20%2C4.12%2C9.30%2C4.20&layer=mapnik&marker=4.1559%2C9.2647"
            className="w-full h-[360px] grayscale-[40%]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
