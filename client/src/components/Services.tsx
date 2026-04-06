import { Dumbbell, User, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Services Section - Otimizado para Mobile
 * Design: Cards responsivos, layout em grid adaptável
 * Conteúdo: Serviços principais da academia
 */
export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Musculação',
      description: 'Equipamentos modernos renovados em 2025. Estrutura completa para todos os níveis.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/equipment-showcase-7xPzXFzbR9cZTWctLzgrBj.webp',
    },
    {
      icon: User,
      title: 'Treino Personalizado',
      description: 'Profissionais criam planos específicos para seus objetivos e necessidades.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/training-session-ay7xnwpEB6ctWXiEr2YAy5.webp',
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Segunda a sexta (05:45 às 21:30) e sábados (07:00 às 10:00).',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/gym-interior-NvMBaohTq2C2tLxpKaPjCe.webp',
    },
    {
      icon: Sparkles,
      title: 'Ambiente Premium',
      description: 'Organização impecável, limpeza rigorosa e atendimento próximo.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/fitness-motivation-Gg3gBKiJByNoyqLZ92n7yt.webp',
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            O que oferecemos
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Tudo que você precisa para alcançar seus objetivos fitness em um único lugar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image */}
                <div className="h-40 md:h-48 overflow-hidden bg-gray-100 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 w-10 md:w-12 h-10 md:h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 md:py-3 rounded-lg transition-all group-hover:shadow-lg text-sm md:text-base">
                    Saiba Mais →
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
