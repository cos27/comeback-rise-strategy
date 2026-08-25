// COS site configuration.
// Add your WhatsApp business number in international format, digits only
// (e.g. "919812345678"). While empty, WhatsApp buttons scroll to the enquiry form.
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_MESSAGE =
  "Hi COS! I'd like to talk about restarting my career.";

export function whatsappHref(): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export const LINKEDIN_URL = "https://www.linkedin.com/";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About COS", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "COS Returnship Program\u2122", href: "#program" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];
