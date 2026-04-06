import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Premium Environment Section - Ambiente Premium
 * Design: Galeria de fotos do ambiente com modal de zoom
 * Conteúdo: Fotos do interior da academia
 */
export default function PremiumEnvironment() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      title: 'Sala de Musculação',
      description: 'Equipamentos modernos renovados em 2025',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/gym-interior-NvMBaohTq2C2tLxpKaPjCe.webp',
    },
    {
      id: 2,
      title: 'Área de Cardio',
      description: 'Equipamentos de última geração',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/equipment-showcase-7xPzXFzbR9cZTWctLzgrBj.webp',
    },
    {
      id: 3,
      title: 'Treino Personalizado',
      description: 'Profissionais qualificados disponíveis',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/training-session-ay7xnwpEB6ctWXiEr2YAy5.webp',
    },
    {
      id: 4,
      title: 'Ambiente Climatizado',
      description: 'Conforto e bem-estar garantidos',
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/fitness-motivation-qT8XnYzL5hP9mK2jR4vW1s.webp',
    },
  ];

  return (
    <section id="ambiente" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Ambiente Premium</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Conheça Nossa Estrutura
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ambiente climatizado, equipamentos modernos e profissionais qualificados para sua transformação.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.url)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-64 md:h-80 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-sm md:text-base text-gray-200">{image.description}</p>
                <p className="text-xs text-orange-400 mt-3 font-semibold">Clique para ampliar →</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          {[
            { label: 'Climatizado', icon: '❄️' },
            { label: 'Bem Ventilado', icon: '💨' },
            { label: 'Seguro', icon: '🔒' },
            { label: 'Moderno', icon: '⚡' },
          ].map((feature, idx) => (
            <div key={idx} className="text-center p-4 md:p-6 rounded-xl bg-white border-2 border-gray-100 hover:border-orange-300 transition-colors">
              <div className="text-3xl md:text-4xl mb-2">{feature.icon}</div>
              <p className="font-semibold text-gray-900 text-sm md:text-base">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
          >
            <X size={28} className="text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Ambiente"
            className="max-w-4xl max-h-[90vh] rounded-2xl object-contain animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
