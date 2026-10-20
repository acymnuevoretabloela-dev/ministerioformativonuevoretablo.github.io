import { MessageCircle } from 'lucide-react';
import { CHURCH } from '@/data/church';

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${CHURCH.whatsapp}?text=${encodeURIComponent('Hola, me gustaría más información sobre la iglesia.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-600/40 transition-all hover:scale-110 hover:bg-green-600"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-green-400/40" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
