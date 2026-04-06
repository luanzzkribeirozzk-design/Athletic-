import { ArrowRight, Zap, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * CTA Section - Otimizado para Mobile
 * Design: Seção de chamada para ação com design impactante
 */
export default function CTASection() {
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de conhecer mais sobre os planos de academia. Qual seria a melhor forma de começar?'
  );
  const whatsappLink = `https://wa.me/5597125446?text=${whatsappMessage}`;
  const mapsLink =
    'https://maps.app.goo.gl/p1VRigdFnPebhDFF9';

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-500 via-green-600 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-14 md:w-16 h-14 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Zap size={28} className="text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Comece sua transformação hoje
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Não espere mais. Junte-se a centenas de alunos satisfeitos e alcance seus objetivos fitness com nossos
            profissionais experientes e equipamentos modernos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button className="w-full bg-white hover:bg-gray-100 text-green-600 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold gap-2 group rounded-xl">
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </a>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button className="w-full bg-green-400 hover:bg-green-300 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold gap-2 rounded-xl">
                <MapPin size={18} />
                Localização
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12 border-t border-white/20">
            <div>
              <p className="text-2xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-white/80 text-xs md:text-sm mt-1 md:mt-2">Alunos Ativos</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-white">15+</p>
              <p className="text-white/80 text-xs md:text-sm mt-1 md:mt-2">Anos Experiência</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-bold text-white">4.5</p>
              <p className="text-white/80 text-xs md:text-sm mt-1 md:mt-2">Avaliação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
