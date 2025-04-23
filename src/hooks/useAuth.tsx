import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface User {
  username: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Utilisateur administrateur avec les identifiants stockés dans les variables d'environnement
const ADMIN_USER = {
  username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || '',
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || '',
  isAdmin: true
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Récupérer l'état d'authentification du localStorage au chargement
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const { toast } = useToast();

  // Sauvegarder l'état d'authentification dans le localStorage à chaque changement
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simuler une vérification d'authentification
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
      const userData = {
        username: ADMIN_USER.username,
        isAdmin: ADMIN_USER.isAdmin
      };
      setUser(userData);
      
      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté en tant qu'administrateur.",
      });
      
      return true;
    }
    
    toast({
      title: "Échec de la connexion",
      description: "Nom d'utilisateur ou mot de passe incorrect.",
      variant: "destructive",
    });
    
    return false;
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès.",
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout,
      isAuthenticated: user !== null 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
  }
  return context;
}
