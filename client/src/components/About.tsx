import { Award, Users, Zap, MapPin, TrendingUp } from 'lucide-react';

/**
 * About Section - Modernismo Minimalista
 * Design: Cards com ícones, layout assimétrico, espaço negativo
 * Conteúdo: Informações sobre a academia e diferenciais
 */
export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Nota 5.0',
      description: 'Avaliação perfeita no Google, reconhecimento de qualidade e excelência',
    },
    {
      icon: Zap,
      title: 'Equipamentos Modernos',
      description: 'Renovados em 2025, com tecnologia de ponta para seus treinos',
    },
    {
      icon: Users,
      title: 'Treinos Personalizados',
      description: 'Profissionais dedicados ao seu progresso e objetivos específicos',
    },
    {
      icon: MapPin,
      title: 'Localização Estratégica',
      description: 'Centro de Massaranduba, fácil acesso e estacionamento disponível',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Referência em Fitness em Massaranduba
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            A Academia Atlética é a unidade de referência na cidade, reconhecida pelo atendimento próximo,
            organização impecável e compromisso com o sucesso de cada aluno.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-all">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border-2 border-orange-500/20 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">CNPJ</p>
              <p className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors">
                63.607.260/0001-40
              </p>
            </div>
            <div className="group">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">Localização</p>
              <p className="text-lg font-semibold text-white">Rua João Dias Corrêa, 60</p>
              <p className="text-gray-300">Centro - Massaranduba, PB</p>
            </div>
            <div className="group">
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">Contato</p>
              <a
                href="tel:+5583981551195"
                className="text-lg font-semibold text-orange-400 hover:text-orange-300 transition-colors"
              >
                (83) 98155-1195
              </a>
              <p className="text-gray-300 text-sm mt-1">Disponível para contato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
