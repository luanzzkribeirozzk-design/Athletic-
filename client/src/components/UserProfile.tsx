import { LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  } | null;
  onLogout: () => void;
}

/**
 * User Profile Component
 * Design: Exibe informações do usuário logado
 */
export default function UserProfile({ user, onLogout }: UserProfileProps) {
  if (!user) return null;

  return (
    <div className="flex items-center gap-3">
      {user.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
      ) : (
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <User size={20} className="text-white" />
        </div>
      )}
      <div className="hidden sm:block">
        <p className="text-sm font-semibold text-gray-900">{user.name}</p>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>
      <Button
        onClick={onLogout}
        variant="ghost"
        size="sm"
        className="ml-2 text-gray-600 hover:text-red-600 hover:bg-red-50"
      >
        <LogOut size={18} />
      </Button>
    </div>
  );
}
