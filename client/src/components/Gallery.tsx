import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Gallery Section - Modernismo Minimalista
 * Design: Grid de fotos com modal de visualização
 * Conteúdo: Fotos do interior da academia
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
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Galeria</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Conheça nosso espaço
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Explore as instalações modernas e bem organizadas da Academia Atlética.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.url)}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full mx-4 animate-fade-in-up">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={32} className="text-white" />
            </button>
            <img
              src={selectedImage}
              alt="Galeria"
              className="w-full h-auto rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
