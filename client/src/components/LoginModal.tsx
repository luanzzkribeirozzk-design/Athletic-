import { useState, useEffect } from 'react';
import { X, Chrome, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; avatar?: string }) => void;
}

/**
 * Login Modal - Autenticação com Google OAuth 2.0
 * Design: Modal elegante com autenticação real via Google
 */
export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);

  // Carregar Google Sign-In Script
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setGoogleScriptLoaded(true);
        if (isOpen && window.google) {
          initializeGoogleSignIn();
        }
      };
      document.head.appendChild(script);
    } else {
      setGoogleScriptLoaded(true);
      if (isOpen) {
        initializeGoogleSignIn();
      }
    }
  }, [isOpen]);

  const initializeGoogleSignIn = () => {
    const googleWindow = window as any;
    if (googleWindow.google) {
      try {
        googleWindow.google.accounts.id.initialize({
          client_id: '1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com', // Substitua com seu Client ID
          callback: handleGoogleResponse,
          auto_select: false,
        });

        // Renderizar botão do Google
        const buttonContainer = document.getElementById('google-signin-button');
        if (buttonContainer && !buttonContainer.querySelector('[data-google-button]')) {
          googleWindow.google.accounts.id.renderButton(buttonContainer, {
            theme: 'outline',
            size: 'large',
            width: '100%',
            text: 'signin_with',
          });
        }
      } catch (error) {
        console.error('Erro ao inicializar Google Sign-In:', error);
      }
    }
  };

  const handleGoogleResponse = (response: any) => {
    if (response.credential) {
      setIsLoading(true);
      try {
        // Decodificar JWT token
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );

        const userData = JSON.parse(jsonPayload);

        // Simular delay de processamento
        setTimeout(() => {
          const user = {
            name: userData.name || userData.email.split('@')[0],
            email: userData.email,
            avatar: userData.picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`,
          };

          onLoginSuccess(user);
          toast.success(`Bem-vindo, ${user.name}!`);
          onClose();
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Erro ao processar login:', error);
        toast.error('Erro ao fazer login com Google. Tente novamente.');
        setIsLoading(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fade-in-up">
        {/* Header */}
        <div className="relative h-40 bg-gradient-to-br from-orange-500 to-orange-600 rounded-t-2xl flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors z-10"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Academia Atlética</h2>
            <p className="text-orange-100 text-sm mt-2">Faça login com sua conta Google</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              Acesse sua conta para gerenciar seus treinos, acompanhar seu progresso e receber dicas personalizadas.
            </p>

            {/* Loading State */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-8">
                <Loader size={40} className="text-orange-500 animate-spin mb-4" />
                <p className="text-gray-600 font-semibold">Autenticando com Google...</p>
              </div>
            )}

            {/* Google Sign-In Button Container */}
            {!isLoading && (
              <div
                id="google-signin-button"
                data-google-button="true"
                className="flex justify-center"
              />
            )}

            {/* Fallback Button if Script Not Loaded */}
            {!googleScriptLoaded && !isLoading && (
              <Button
                disabled
                className="w-full bg-gray-300 text-gray-600 py-3 font-semibold gap-3 rounded-lg"
              >
                <Chrome size={20} />
                Carregando Google Sign-In...
              </Button>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <p className="text-blue-900 text-sm">
              <span className="font-semibold">🔒 Seguro:</span> Sua senha nunca é compartilhada conosco. Usamos autenticação segura do Google.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


