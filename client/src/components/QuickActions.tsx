import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Quick Actions Component
 * Design: Botões de ação rápida para contato direto
 * Funcionalidade: WhatsApp, Google Maps, Telefone
 */
export default function QuickActions() {
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de conhecer mais sobre os planos de academia. Qual seria a melhor forma de começar?'
  );
  const whatsappLink = `https://wa.me/5583981551195?text=${whatsappMessage}`;
  const mapsLink =
    'https://www.google.com/maps/search/Rua+João+Dias+Corrêa,+60,+Massaranduba,+PB/@-6.3,+-35.3,15z';

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* WhatsApp */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 md:py-6 font-semibold gap-2 rounded-xl text-base md:text-lg">
              <MessageCircle size={20} />
              WhatsApp
            </Button>
          </a>

          {/* Google Maps */}
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 md:py-6 font-semibold gap-2 rounded-xl text-base md:text-lg">
              <MapPin size={20} />
              Localização
            </Button>
          </a>

          {/* Telefone */}
          <a href="tel:+5583981551195" className="w-full">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 md:py-6 font-semibold gap-2 rounded-xl text-base md:text-lg">
              <Phone size={20} />
              Ligar
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
