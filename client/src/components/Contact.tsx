import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Contact Section - Otimizado para Mobile
 * Design: Botões de ação diretos, informações claras
 * Funcionalidade: Links diretos para contato
 */
export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de conhecer mais sobre os planos de academia. Qual seria a melhor forma de começar?'
  );
  const whatsappLink = `https://wa.me/5583981551195?text=${whatsappMessage}`;
  const mapsLink =
    'https://www.google.com/maps/search/Rua+João+Dias+Corrêa,+60,+Massaranduba,+PB/@-6.3,+-35.3,15z';

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Entre em contato conosco
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto">
            Escolha a melhor forma de nos contactar. Estamos prontos para ajudar!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* WhatsApp */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <MessageCircle size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Envie uma mensagem pelo WhatsApp e receba uma resposta rápida.
              </p>
              <p className="text-lg font-semibold text-green-600">(83) 98155-1195</p>
            </div>
          </a>

          {/* Google Maps */}
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-red-400 hover:shadow-lg transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <MapPin size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Localização</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Visite-nos no endereço abaixo. Veja a rota no Google Maps.
              </p>
              <p className="text-sm md:text-base font-semibold text-red-600">
                Rua João Dias Corrêa, 60<br />
                Massaranduba - PB
              </p>
            </div>
          </a>

          {/* Telefone */}
          <a href="tel:+5583981551195" className="group">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Phone size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Ligue direto para falar com nosso atendimento.
              </p>
              <p className="text-lg font-semibold text-blue-600">(83) 98155-1195</p>
            </div>
          </a>

          {/* Email */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Mail size={28} className="text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Horários</h3>
            <div className="text-gray-600 text-sm md:text-base">
              <p className="font-semibold text-gray-900 mb-2">Segunda a Sexta:</p>
              <p className="mb-3">05:45 - 11:00 | 14:00 - 21:30</p>
              <p className="font-semibold text-gray-900 mb-2">Sábado:</p>
              <p>07:00 - 10:00</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 md:py-6 text-base md:text-lg font-semibold gap-2 rounded-xl shadow-lg">
              <MessageCircle size={20} />
              Enviar Mensagem pelo WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
