import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Send } from "lucide-react";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `*New Website Consultation*%0A%0A` +
      `*Name:* ${data.get("name")}%0A` +
      `*Business:* ${data.get("business")}%0A` +
      `*Phone:* ${data.get("phone")}%0A` +
      `*WhatsApp:* ${data.get("whatsapp")}%0A` +
      `*Email:* ${data.get("email")}%0A` +
      `*Service:* ${data.get("service")}%0A` +
      `*Budget:* ${data.get("budget")}%0A` +
      `*Timeline:* ${data.get("timeline")}%0A` +
      `*Project:* ${data.get("description")}`;
    window.open(`https://wa.me/237689963319?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Get Started</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Book Your <span className="text-gradient-primary">Professional Website</span> Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your project — we'll respond within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
          <form onSubmit={onSubmit} className="relative glass-strong rounded-3xl p-8 lg:p-10 shadow-elegant space-y-5">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-gold mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl mb-2">Request Sent!</h3>
                <p className="text-muted-foreground">We'll be in touch via WhatsApp shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name *"><Input name="name" required placeholder="John Doe" /></Field>
                  <Field label="Business Name"><Input name="business" placeholder="Your company" /></Field>
                  <Field label="Phone *"><Input name="phone" required type="tel" placeholder="+237 ..." /></Field>
                  <Field label="WhatsApp"><Input name="whatsapp" type="tel" placeholder="+237 ..." /></Field>
                  <Field label="Email *"><Input name="email" required type="email" placeholder="you@email.com" /></Field>
                  <Field label="Service Needed *">
                    <select name="service" required className="flex h-10 w-full rounded-md border border-input bg-input/50 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                      <option value="">Select a service</option>
                      <option>Professional Website Design</option>
                      <option>Website Development</option>
                      <option>Website Editing & Redesign</option>
                      <option>Business Website</option>
                      <option>E-Commerce Website</option>
                      <option>SEO Optimization</option>
                      <option>Website Maintenance</option>
                    </select>
                  </Field>
                  <Field label="Budget Range">
                    <select name="budget" className="flex h-10 w-full rounded-md border border-input bg-input/50 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                      <option value="">Select budget</option>
                      <option>50,000 – 150,000 XAF</option>
                      <option>150,000 – 350,000 XAF</option>
                      <option>350,000 – 700,000 XAF</option>
                      <option>700,000+ XAF</option>
                    </select>
                  </Field>
                  <Field label="Preferred Timeline">
                    <select name="timeline" className="flex h-10 w-full rounded-md border border-input bg-input/50 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                      <option value="">Select timeline</option>
                      <option>ASAP (within 1 week)</option>
                      <option>2 – 3 weeks</option>
                      <option>1 month</option>
                      <option>Flexible</option>
                    </select>
                  </Field>
                </div>
                <Field label="Project Description *">
                  <Textarea name="description" required rows={5} placeholder="Tell us about your project, goals, and any specific requirements..." />
                </Field>
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  <Send className="h-4 w-4" /> Book Consultation Now
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Your information is private and secure. We never share your details.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
