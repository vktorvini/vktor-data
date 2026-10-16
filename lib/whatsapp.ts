const FALLBACK_PHONE = "5515998115708";

export function getWhatsAppUrl(message?: string) {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? FALLBACK_PHONE;
  const phone = raw.replace(/\D/g, "") || FALLBACK_PHONE.replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
