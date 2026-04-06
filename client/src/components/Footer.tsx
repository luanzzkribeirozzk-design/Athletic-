import { Phone, MapPin, Clock } from 'lucide-react';

/**
 * Footer Component - Modernismo Minimalista
 * Design: Layout limpo, informações organizadas, links úteis
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AA</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Athletic Academia</h3>
                <p className="text-xs text-gray-400">Caxias do Sul - RS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Transformando vidas através do fitness. Equipamentos modernos, treinos personalizados e atendimento próximo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: 'Sobre', href: '#sobre' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Horários', href: '#horarios' },
                { label: 'Contato', href: '#contato' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5597125446"
                  className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                >
                  (55) 9712-5446
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Rua João Dias Corrêa, 60<br />
                  Caxias do Sul - RS
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Seg-Sex: 7h - 22h<br />
                  Sáb: 9h - 16h
                </span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Informações</h4>
            <ul className="space-y-3">

              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">Avaliação</p>
                <p className="text-green-500 font-bold text-lg">★★★★☆ 4.5</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Athletic Academia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/athletic.academia?igsh=ODYzdnZlMzF6dXN6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="https://www.instagram.com/athletic.academia?igsh=ODYzdnZlMzF6dXN6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
