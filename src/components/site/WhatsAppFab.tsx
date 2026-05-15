import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/237689963319"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-gold grid place-items-center shadow-gold animate-pulse-glow hover:scale-110 transition-smooth"
    >
      <MessageCircle className="h-6 w-6 text-gold-foreground" />
    </a>
  );
}
