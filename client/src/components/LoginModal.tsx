import { useState } from 'react';
import { X, Chrome, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string; avatar?: string }) => void;
}

/**
 * Login Modal - Autenticação com Google e Email/Senha
 * Design: Modal elegante com validação adequada
 */
export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Validação de email
  const validateEmail = (emailValue: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  // Validação de senha
  const validatePassword = (passwordValue: string): boolean => {
    return passwordValue.length >= 6;
  };

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

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    // Validar email
    if (!email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email inválido';
    }

    // Validar senha
    if (!password.trim()) {
      newErrors.password = 'Senha é obrigatória';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    setErrors(newErrors);

    // Se houver erros, não fazer login
    if (Object.keys(newErrors).length > 0) {
      toast.error('Por favor, corrija os erros abaixo');
      return;
    }

    // Se passou na validação, fazer login
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockUser = {
        name: email.split('@')[0],
        email: email,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };

      onLoginSuccess(mockUser);
      toast.success(`Bem-vindo, ${mockUser.name}!`);
      setEmail('');
      setPassword('');
      setErrors({});
      onClose();
    } catch (error) {
      toast.error('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fade-in-up max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-t-2xl flex items-center justify-center sticky top-0">
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
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 py-3 font-semibold gap-3 transition-all disabled:opacity-50 rounded-lg"
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

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="seu@email.com"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
                }`}
              />
              {errors.email && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle size={16} />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: undefined });
                }}
                placeholder="Mínimo 6 caracteres"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-orange-500 focus:ring-orange-200'
                }`}
              />
              {errors.password && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <AlertCircle size={16} />
                  {errors.password}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 font-semibold rounded-lg transition-all disabled:opacity-50"
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Não tem conta?{' '}
            <button
              onClick={() => toast.info('Funcionalidade de cadastro em breve!')}
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
