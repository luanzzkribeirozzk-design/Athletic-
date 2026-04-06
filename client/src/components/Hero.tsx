import { Button } from '@/components/ui/button';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

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

  const features = [
    'Equipamentos Modernos',
    'Treinos Personalizados',
    'Atendimento Próximo',
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/hero-academia-3njb8eYRuUHM8MRW5wQtya.webp)',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <div className="flex items-center gap-1 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/30 hover:bg-orange-500/30 transition-all">
              <Star size={16} className="text-orange-500 fill-orange-500" />
              <span className="text-orange-500 font-semibold text-sm">Nota 5.0 no Google</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Transforme seu corpo,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              eleve sua energia
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-xl animate-fade-in-up animation-delay-200">
            Equipamentos modernos renovados em 2025, treinos personalizados e atendimento próximo. Sua jornada fitness
            começa aqui.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 animate-fade-in-up animation-delay-400">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <CheckCircle size={20} className="text-orange-400 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold gap-2 group shadow-lg hover:shadow-xl transition-all"
            >
              Comece Agora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              Conheça Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-400">
            <div>
              <p className="text-3xl font-bold text-orange-400">500+</p>
              <p className="text-white/70 text-sm mt-1">Alunos Ativos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400">15+</p>
              <p className="text-white/70 text-sm mt-1">Anos Experiência</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400">5.0★</p>
              <p className="text-white/70 text-sm mt-1">Avaliação Google</p>
            </div>
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
