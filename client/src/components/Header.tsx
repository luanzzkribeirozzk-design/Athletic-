import { useState } from 'react';
import { Menu, X, Phone, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoginModal from './LoginModal';
import UserProfile from './UserProfile';

/**
 * Header Component - Modernismo Minimalista
 * Design: Navegação limpa, logo proeminente, CTA de contato em laranja
 * Responsivo: Menu hamburger em mobile
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; avatar?: string } | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AA</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-gray-900">Academia Atlética</h1>
            <p className="text-xs text-gray-500">Massaranduba - PB</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('horarios')}
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
          >
            Horários
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
          >
            Contato
          </button>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <UserProfile user={user} onLogout={() => setUser(null)} />
          ) : (
            <Button
              onClick={() => setLoginModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            >
              <LogIn size={18} />
              Entrar
            </Button>
          )}
          <a href="tel:+5583981551195" className="flex items-center gap-2">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
              <Phone size={18} />
              Ligar Agora
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-left text-gray-700 hover:text-orange-500 font-medium py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-left text-gray-700 hover:text-orange-500 font-medium py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('horarios')}
              className="text-left text-gray-700 hover:text-orange-500 font-medium py-2"
            >
              Horários
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left text-gray-700 hover:text-orange-500 font-medium py-2"
            >
              Contato
            </button>
            {user ? (
              <>
                <div className="py-2 px-4 border-t border-gray-100">
                  <UserProfile user={user} onLogout={() => setUser(null)} />
                </div>
              </>
            ) : (
              <Button
                onClick={() => {
                  setLoginModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 mb-3"
              >
                <LogIn size={18} />
                Entrar
              </Button>
            )}
            <a href="tel:+5583981551195" className="w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white gap-2">
                <Phone size={18} />
                Ligar Agora
              </Button>
            </a>
          </nav>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={(userData) => setUser(userData)}
      />
    </header>
  );
}
