import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

/**
 * Gallery Section - Design Profissional
 * Design: Grid de fotos com modal elegante
 * Funcionalidade: Clique para ampliar
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/hero-academia-3njb8eYRuUHM8MRW5wQtya.webp',
      title: 'Área de Musculação',
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/gym-interior-NvMBaohTq2C2tLxpKaPjCe.webp',
      title: 'Equipamentos Modernos',
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/equipment-showcase-7xPzXFzbR9cZTWctLzgrBj.webp',
      title: 'Dumbbells Premium',
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/training-session-ay7xnwpEB6ctWXiEr2YAy5.webp',
      title: 'Treino Personalizado',
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/fitness-motivation-Gg3gBKiJByNoyqLZ92n7yt.webp',
      title: 'Ambiente Motivador',
    },
    {
      url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663512885680/8erVSb7Jbhh6jkDfZXXMgB/hero-academia-3njb8eYRuUHM8MRW5wQtya.webp',
      title: 'Estrutura Completa',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Galeria</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Conheça nosso espaço
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed mx-auto">
            Explore as instalações modernas e bem organizadas da Academia Atlética. Clique nas fotos para ampliar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.url)}
              className="group relative h-48 md:h-64 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-4 md:p-6">
                <ZoomIn size={24} className="text-white" />
                <p className="text-white font-bold text-lg md:text-xl">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full animate-fade-in-up">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={32} className="text-white" />
            </button>
            <img
              src={selectedImage}
              alt="Galeria"
              className="w-full h-auto rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
