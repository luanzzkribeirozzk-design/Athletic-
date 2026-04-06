import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * CTA Section - Modernismo Minimalista
 * Design: Seção de chamada para ação com design impactante
 */
export default function CTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Zap size={32} className="text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Comece sua transformação hoje
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Não espere mais. Junte-se a centenas de alunos satisfeitos e alcance seus objetivos fitness com nossos
            profissionais experientes e equipamentos modernos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-6 text-lg font-semibold gap-2 group"
            >
              Agendar Visita
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="tel:+5583981551195">
              <Button className="w-full bg-orange-400 hover:bg-orange-300 text-white px-8 py-6 text-lg font-semibold gap-2">
                Ligar Agora
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-white/80 text-sm mt-2">Alunos Ativos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">15+</p>
              <p className="text-white/80 text-sm mt-2">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">5.0</p>
              <p className="text-white/80 text-sm mt-2">Avaliação Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
