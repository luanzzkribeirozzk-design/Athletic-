import { Dumbbell, User, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Services Section - Modernismo Minimalista
 * Design: Cards com imagens, layout em grid, CTAs em laranja
 * Conteúdo: Serviços principais da academia
 */
export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Musculação',
      description: 'Equipamentos modernos e renovados em 2025. Estrutura completa para todos os níveis de treinamento.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/equipment-showcase-7xPzXFzbR9cZTWctLzgrBj.webp',
    },
    {
      icon: User,
      title: 'Treino Personalizado',
      description: 'Profissionais experientes criam planos de treino específicos para seus objetivos e necessidades.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/training-session-ay7xnwpEB6ctWXiEr2YAy5.webp',
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Aberta de segunda a sexta (05:45 às 21:30) e sábados (07:00 às 10:00) para sua conveniência.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/gym-interior-NvMBaohTq2C2tLxpKaPjCe.webp',
    },
    {
      icon: Sparkles,
      title: 'Ambiente Premium',
      description: 'Organização impecável, limpeza rigorosa e atendimento próximo em um espaço moderno e acolhedor.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/fitness-motivation-Gg3gBKiJByNoyqLZ92n7yt.webp',
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            O que oferecemos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Tudo que você precisa para alcançar seus objetivos fitness em um único lugar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-48 md:h-56 overflow-hidden bg-gray-100 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <Icon size={24} className="text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Saiba Mais
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
