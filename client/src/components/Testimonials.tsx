import { Star } from 'lucide-react';

/**
 * Testimonials Section - Modernismo Minimalista
 * Design: Cards com depoimentos reais, avaliação 4.5 estrelas
 * Conteúdo: Depoimentos de clientes reais
 */
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Santos',
      role: 'Aluno',
      text: 'Ótima academia! Equipamentos em bom estado e atendimento atencioso. Recomendo!',
      rating: 4.5,
    },
    {
      name: 'Marina Costa',
      role: 'Aluna',
      text: 'Bom ambiente e instrutores competentes. Estou gostando de treinar aqui.',
      rating: 4.5,
    },
    {
      name: 'Roberto Oliveira',
      role: 'Aluno',
      text: 'Academia bem organizada com bons horários. Atende bem as necessidades.',
      rating: 4.5,
    },
    {
      name: 'Juliana Lima',
      role: 'Aluna',
      text: 'Lugar limpo e profissionais dedicados. Estou satisfeita com o atendimento.',
      rating: 4.5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Avaliações</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            O que nossos alunos acham
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={20} className="text-green-500 fill-green-500" />
            ))}
            <Star size={20} className="text-green-500 fill-green-500 opacity-50" />
            <span className="text-2xl font-bold text-gray-900 ml-2">4.5</span>
          </div>
          <p className="text-gray-600 text-sm">Baseado em avaliações reais de nossos alunos</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={16} className="text-green-500 fill-green-500" />
                ))}
                <Star size={16} className="text-green-500 fill-green-500 opacity-50" />
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
