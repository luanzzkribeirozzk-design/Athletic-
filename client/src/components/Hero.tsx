import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

/**
 * Hero Section - Modernismo Minimalista
 * Design: Imagem grande com overlay, tipografia ousada, CTA em laranja
 * Layout: Assimétrico com espaço negativo
 */
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/hero-academia-3njb8eYRuUHM8MRW5wQtya.webp)',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <div className="flex items-center gap-1 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30">
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <span className="text-orange-500 font-semibold text-sm">Nota 5.0 no Google</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Transforme seu corpo, <span className="text-orange-500">eleve sua energia</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
            Equipamentos modernos renovados em 2025, treinos personalizados e atendimento próximo. Sua jornada fitness começa aqui.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold gap-2 group"
            >
              Comece Agora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Conheça Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium">Scroll para explorar</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
