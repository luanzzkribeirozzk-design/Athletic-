import { Star } from 'lucide-react';

/**
 * Testimonials Section - Modernismo Minimalista
 * Design: Cards com depoimentos, avaliações em estrelas
 * Conteúdo: Depoimentos de clientes
 */
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Santos',
      role: 'Personal Trainer',
      text: 'A Academia Atlética é referência em qualidade. Equipamentos modernos e atendimento impecável. Recomendo!',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos',
    },
    {
      name: 'Marina Costa',
      role: 'Aluna',
      text: 'Transformei meu corpo em 6 meses. Os treinos personalizados realmente fazem diferença. Muito satisfeita!',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marina',
    },
    {
      name: 'Roberto Oliveira',
      role: 'Empresário',
      text: 'Horários flexíveis, ambiente limpo e organizado. Perfeito para minha rotina. Nota 10!',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=roberto',
    },
    {
      name: 'Juliana Lima',
      role: 'Estudante',
      text: 'Melhor academia da cidade! Profissionais atenciosos e equipamentos de primeira qualidade.',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=juliana',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            O que nossos alunos dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-orange-500 fill-orange-500" />
            ))}
            <span className="text-2xl font-bold text-gray-900 ml-2">5.0</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto">
            Avaliação perfeita no Google com centenas de comentários positivos de nossos alunos satisfeitos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-orange-200"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
