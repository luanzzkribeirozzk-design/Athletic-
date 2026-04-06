import { useState } from 'react';
import { X, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; avatar?: string }) => void;
}

/**
 * Login Modal - Autenticação com Google
 * Design: Modal elegante com animação suave
 */
export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // Simular login com Google
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockUser = {
        name: 'João Silva',
        email: 'joao@example.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=joao',
      };

      onLoginSuccess(mockUser);
      toast.success(`Bem-vindo, ${mockUser.name}!`);
      onClose();
    } catch (error) {
      toast.error('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-fade-in-up">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-t-2xl flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Academia Atlética</h2>
            <p className="text-orange-100 text-sm mt-1">Faça login para continuar</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8">
            <p className="text-gray-600 text-center mb-6">
              Acesse sua conta para gerenciar seus treinos e acompanhar seu progresso.
            </p>

            <div className="space-y-3">
              <Button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 py-3 font-semibold gap-3 transition-all disabled:opacity-50"
              >
                <Chrome size={20} />
                {isLoading ? 'Conectando...' : 'Entrar com Google'}
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email Login */}
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Seu email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            />
            <input
              type="password"
              placeholder="Sua senha"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            />
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold">
              Entrar
            </Button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Não tem conta?{' '}
            <button className="text-orange-500 hover:text-orange-600 font-semibold transition-colors">
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
