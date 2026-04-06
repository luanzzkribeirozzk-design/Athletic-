import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    image: string;
    details: string[];
    price?: string;
  } | null;
}

/**
 * Service Modal - Detalhes de serviços
 * Design: Modal elegante com informações completas
 */
export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {/* Header */}
        <div className="relative h-48 md:h-64 bg-gradient-to-br from-orange-500 to-orange-600 rounded-t-3xl flex items-end p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 md:h-64 object-cover rounded-2xl mb-6 md:mb-8"
          />

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            {service.description}
          </p>

          {/* Details */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">O que você recebe:</h3>
            <div className="space-y-3">
              {service.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-base md:text-lg">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Note */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 mb-8 border-2 border-blue-200">
            <p className="text-blue-900 text-sm md:text-base font-semibold">
              💬 Entre em contato conosco via WhatsApp para conhecer nossos planos e valores atualizados!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href={`https://wa.me/5583981551195?text=${encodeURIComponent(
                `Olá! Tenho interesse no serviço de ${service.title}. Gostaria de mais informações.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 md:py-4 font-semibold rounded-xl">
                Contratar pelo WhatsApp
              </Button>
            </a>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-2 border-gray-300 hover:bg-gray-50 py-3 md:py-4 font-semibold rounded-xl"
            >
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
