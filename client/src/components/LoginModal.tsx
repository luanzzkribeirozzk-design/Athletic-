import { useState } from 'react';
import { X, Chrome, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; avatar?: string }) => void;
}

/**
 * Login Modal - Autenticação com Google
 * Design: Modal elegante com simulação de Google Sign-In
 * Nota: Para produção, integre com Google OAuth 2.0 real
 */
export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // Simular processo de autenticação com Google
      // Em produção, isso seria substituído por Google OAuth 2.0 real
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Gerar usuário aleatório para demonstração
      const firstNames = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Fernanda'];
      const lastNames = ['Silva', 'Santos', 'Oliveira', 'Costa', 'Ferreira', 'Gomes'];
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

      const mockUser = {
        name: `${firstName} ${lastName}`,
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };

      onLoginSuccess(mockUser);
      toast.success(`Bem-vindo, ${mockUser.name}! 🎉`);
      onClose();
    } catch (error) {
      toast.error('Erro ao fazer login com Google. Tente novamente.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fade-in-up">
        {/* Header */}
        <div className="relative h-40 bg-gradient-to-br from-green-500 to-green-600 rounded-t-2xl flex items-center justify-center">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors z-10 disabled:opacity-50"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Athletic Academia</h2>
            <p className="text-green-100 text-sm mt-2">Acesse sua conta</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {isLoading ? (
            // Loading State
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <Chrome size={32} className="text-green-500" />
                </div>
              </div>
              <p className="text-gray-700 font-semibold text-center">Conectando com Google...</p>
              <p className="text-gray-500 text-sm text-center mt-2">Aguarde um momento</p>
            </div>
          ) : (
            <>
              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  Faça login com sua conta Google para acessar seus treinos, acompanhar progresso e receber dicas personalizadas.
                </p>

                {/* Google Sign-In Button */}
                <Button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 py-4 font-semibold gap-3 transition-all rounded-lg shadow-md hover:shadow-lg"
                >
                  <Chrome size={24} />
                  <span className="text-lg">Entrar com Google</span>
                </Button>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <p className="text-blue-900 text-sm leading-relaxed">
                  <span className="font-semibold block mb-2">🔒 Segurança Garantida</span>
                  Sua senha nunca é compartilhada conosco. Usamos autenticação segura do Google.
                </p>
              </div>

              {/* Footer Note */}
              <p className="text-center text-gray-500 text-xs mt-6">
                Ao fazer login, você concorda com nossos Termos de Serviço e Política de Privacidade.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
