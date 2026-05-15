import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { TechStack } from "@/components/site/TechStack";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { BookingForm } from "@/components/site/BookingForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Elijah Grace Unlimited International | Premium Web Developer in Buea, Cameroon" },
      { name: "description", content: "Premium professional website design, development, SEO & digital solutions in Buea, Cameroon. 10+ years of experience. Trusted by professionals." },
      { property: "og:title", content: "Elijah Grace Unlimited International — Premium Web Solutions" },
      { property: "og:description", content: "World-class website design, development, and digital solutions trusted by professionals across Cameroon." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <TechStack />
      <Portfolio />
      <Testimonials />
      <BookingForm />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
