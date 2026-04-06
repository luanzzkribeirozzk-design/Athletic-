import { useState } from 'react';
import { Dumbbell, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceModal from './ServiceModal';

/**
 * Services Section - Design Profissional
 * Design: Cards com modais, layout responsivo premium
 * Funcionalidade: Botões "Saiba Mais" abrem modais com detalhes
 */
export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'musculacao',
      icon: Dumbbell,
      title: 'Musculação',
      description: 'Equipamentos modernos renovados em 2025. Estrutura completa para todos os níveis.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/equipment-showcase-7xPzXFzbR9cZTWctLzgrBj.webp',
      details: [
        'Acesso a todos os equipamentos de musculação',
        'Ambiente climatizado e bem ventilado',
        'Profissionais qualificados disponíveis',
        'Avaliação física inicial gratuita',
        'Programa de treino personalizado',
      ],
    },
    {
      id: 'treino-personalizado',
      icon: User,
      title: 'Treino Personalizado',
      description: 'Profissionais criam planos específicos para seus objetivos e necessidades.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/training-session-ay7xnwpEB6ctWXiEr2YAy5.webp',
      details: [
        'Avaliação corporal completa',
        'Plano de treino 100% personalizado',
        'Acompanhamento semanal',
        'Ajustes conforme progresso',
        'Consultoria nutricional básica',
      ],
    },
    {
      id: 'horarios-flexiveis',
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Segunda a sexta (05:45 às 21:30) e sábados (07:00 às 10:00).',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/gym-interior-NvMBaohTq2C2tLxpKaPjCe.webp',
      details: [
        'Aberto de segunda a sexta das 05:45 às 21:30',
        'Sábados das 07:00 às 10:00',
        'Escolha o melhor horário para você',
        'Sem restrição de permanência',
        'Acesso ilimitado durante o funcionamento',
      ],
    },

  ];

  return (
    <section id="servicos" className="py-16 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Serviços Premium</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Soluções Completas para Seu Fitness
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed mx-auto">
            Oferecemos uma gama completa de serviços projetados para ajudá-lo a alcançar seus objetivos de forma segura
            e eficaz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-40 md:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                    <Icon size={24} className="text-orange-500" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Button */}
                  <Button
                    onClick={() => setSelectedService(service.id)}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 md:py-4 rounded-xl transition-all group-hover:shadow-lg text-base md:text-lg"
                  >
                    Saiba Mais →
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      {services.map((service) => (
        <ServiceModal
          key={service.id}
          isOpen={selectedService === service.id}
          onClose={() => setSelectedService(null)}
          service={
            selectedService === service.id
              ? {
                  title: service.title,
                  description: service.description,
                  image: service.image,
                  details: service.details,
                }
              : null
          }
        />
      ))}
    </section>
  );
}
