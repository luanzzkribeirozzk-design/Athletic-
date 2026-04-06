import { useState } from 'react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * Contact Section - Modernismo Minimalista
 * Design: Formulário limpo, informações de contato, CTA em laranja
 * Funcionalidade: Formulário com validação
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio (em produção, seria uma chamada à API)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(83) 98155-1195',
      link: 'tel:+5583981551195',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Rua João Dias Corrêa, 60 - Centro, Massaranduba - PB',
      link: 'https://maps.google.com/?q=Rua+João+Dias+Corrêa,+60,+Massaranduba,+PB',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@academiaatetlica.com.br',
      link: 'mailto:contato@academiaatetlica.com.br',
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Vamos conversar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Entre em contato conosco para tirar dúvidas, agendar uma visita ou começar sua jornada fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('https') ? '_blank' : undefined}
                    rel={info.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                    className="group flex gap-4 p-6 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:bg-white"
                  >
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                      <Icon size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
                        {info.title}
                      </p>
                      <p className="text-gray-900 font-semibold group-hover:text-orange-500 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-4">Ações Rápidas</p>
              <div className="space-y-3">
                <a href="tel:+5583981551195" className="w-full">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-2">
                    <Phone size={18} />
                    Ligar Agora
                  </Button>
                </a>
                <a
                  href="https://maps.google.com/?q=Rua+João+Dias+Corrêa,+60,+Massaranduba,+PB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <MapPin size={18} />
                    Ver no Mapa
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 md:p-12 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(83) 98155-1195"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos sobre seus objetivos fitness..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
