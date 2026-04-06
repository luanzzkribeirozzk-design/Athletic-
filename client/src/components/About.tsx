import { Award, Users, Zap, MapPin, TrendingUp } from 'lucide-react';

/**
 * About Section - Otimizado para Mobile
 * Design: Cards responsivos, layout adaptável
 * Conteúdo: Informações sobre a academia e diferenciais
 */
export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Nota 4.5',
      description: 'Avaliação real no Google',
    },
    {
      icon: Zap,
      title: 'Equipamentos Modernos',
      description: 'Renovados em 2025',
    },
    {
      icon: Users,
      title: 'Treinos Personalizados',
      description: 'Profissionais dedicados',
    },
    {
      icon: MapPin,
      title: 'Localização Estratégica',
      description: 'Centro de Massaranduba',
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Referência em Fitness
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            A Athletic Academia é a unidade de referência na cidade, reconhecida pelo atendimento próximo,
            organização impecável e compromisso com o sucesso de cada aluno.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white"
              >
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-10 border-2 border-green-500/20 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div className="group">
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">CNPJ</p>
              <p className="text-2xl md:text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                63.607.260/0001-40
              </p>
            </div>
            <div className="group">
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">Localização</p>
              <p className="text-base md:text-lg font-semibold text-white">Rua João Dias Corrêa, 60</p>
              <p className="text-sm md:text-base text-gray-300">Centro - Massaranduba, PB</p>
            </div>
            <div className="group">
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">Contato</p>
              <a
                href="tel:+5597125446"
                className="text-base md:text-lg font-semibold text-green-400 hover:text-green-300 transition-colors"
              >
                (55) 9712-5446
              </a>
              <p className="text-xs md:text-sm text-gray-300 mt-1">Disponível para contato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
