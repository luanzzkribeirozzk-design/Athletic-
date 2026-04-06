import { Button } from '@/components/ui/button';
import { ArrowRight, Star, CheckCircle, MessageCircle, MapPin } from 'lucide-react';

/**
 * Hero Section - Otimizado para Mobile
 * Design: Imagem grande com overlay, tipografia responsiva
 * Layout: Adaptado para celular
 */
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de conhecer mais sobre os planos de academia. Qual seria a melhor forma de começar?'
  );
  const whatsappLink = `https://wa.me/5583981551195?text=${whatsappMessage}`;
  const mapsLink =
    'https://www.google.com/maps/search/Rua+João+Dias+Corrêa,+60,+Massaranduba,+PB/@-6.3,+-35.3,15z';

  const features = ['Equipamentos Modernos', 'Treinos Personalizados', 'Atendimento Próximo'];

  return (
    <section className="relative w-full min-h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/hero-academia-3njb8eYRuUHM8MRW5wQtya.webp)',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl py-16 md:py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4 md:mb-6 animate-fade-in">
            <div className="flex items-center gap-1 bg-orange-500/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-orange-500/30 hover:bg-orange-500/30 transition-all">
              <Star size={14} className="text-orange-500 fill-orange-500" />
              <span className="text-orange-500 font-semibold text-xs md:text-sm">Nota 4.5 no Google</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in-up">
            Transforme seu corpo,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              eleve sua energia
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl text-gray-100 mb-6 md:mb-8 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
            Equipamentos modernos, treinos personalizados e atendimento próximo. Sua jornada fitness começa aqui.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 md:mb-10 animate-fade-in-up animation-delay-400">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <CheckCircle size={16} className="text-orange-400 flex-shrink-0" />
                <span className="font-medium text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 animate-fade-in-up animation-delay-400">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold gap-2 shadow-lg hover:shadow-xl transition-all">
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </a>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold gap-2 shadow-lg hover:shadow-xl transition-all">
                <MapPin size={18} />
                Localização
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/20 animate-fade-in-up animation-delay-400">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-orange-400">500+</p>
              <p className="text-white/70 text-xs md:text-sm mt-1">Alunos</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-orange-400">15+</p>
              <p className="text-white/70 text-xs md:text-sm mt-1">Anos</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-orange-400">4.5★</p>
              <p className="text-white/70 text-xs md:text-sm mt-1">Google</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs md:text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
