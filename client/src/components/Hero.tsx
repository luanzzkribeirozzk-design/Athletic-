import { Button } from '@/components/ui/button';
import { ArrowRight, Star, CheckCircle, MessageCircle, MapPin, Zap } from 'lucide-react';

/**
 * Hero Section - Design Profissional Premium
 * Design: Imagem grande com overlay elegante, tipografia sofisticada
 * Layout: Assimétrico com espaço negativo estratégico
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

  const features = [
    { icon: Zap, text: 'Equipamentos Modernos' },
    { icon: CheckCircle, text: 'Treinos Personalizados' },
    { icon: Star, text: 'Atendimento Premium' },
  ];

  return (
    <section className="relative w-full min-h-screen md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/hero-academia-3njb8eYRuUHM8MRW5wQtya.webp)',
        }}
      >
        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl py-16 md:py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6 md:mb-8 animate-fade-in">
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-md px-4 md:px-6 py-3 rounded-full border border-orange-400/40 hover:border-orange-400/60 transition-all">
              <Star size={16} className="text-orange-400 fill-orange-400" />
              <span className="text-orange-300 font-bold text-sm md:text-base">Nota 4.5 no Google</span>
              <span className="text-orange-300/60 text-xs md:text-sm">• Avaliação Real</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight animate-fade-in-up tracking-tight">
            Transforme seu corpo,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 drop-shadow-lg">
              eleve sua energia
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200 font-light">
            Equipamentos de última geração, treinos personalizados e atendimento excepcional. Sua transformação começa
            aqui.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14 animate-fade-in-up animation-delay-400">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 text-white/95 group">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/40 transition-colors">
                    <Icon size={20} className="text-orange-400" />
                  </div>
                  <span className="font-semibold text-base md:text-lg">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 animate-fade-in-up animation-delay-400">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold gap-2 shadow-lg hover:shadow-2xl transition-all rounded-xl">
                <MessageCircle size={20} />
                WhatsApp
              </Button>
            </a>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold gap-2 shadow-lg hover:shadow-2xl transition-all rounded-xl">
                <MapPin size={20} />
                Localização
              </Button>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-10 md:pt-12 border-t border-white/20 animate-fade-in-up animation-delay-400">
            <div className="group">
              <p className="text-3xl md:text-4xl font-black text-orange-400 group-hover:text-orange-300 transition-colors">
                500+
              </p>
              <p className="text-white/70 text-xs md:text-sm mt-2 font-semibold">Alunos Satisfeitos</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-4xl font-black text-orange-400 group-hover:text-orange-300 transition-colors">
                15+
              </p>
              <p className="text-white/70 text-xs md:text-sm mt-2 font-semibold">Anos de Excelência</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-4xl font-black text-orange-400 group-hover:text-orange-300 transition-colors">
                4.5★
              </p>
              <p className="text-white/70 text-xs md:text-sm mt-2 font-semibold">Avaliação Google</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs font-semibold uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
