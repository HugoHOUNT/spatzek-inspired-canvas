interface LoginResponse {
  success: boolean;
  user?: {
    username: string;
    isAdmin: boolean;
  };
  error?: string;
}

export async function loginService(username: string, password: string): Promise<LoginResponse> {
  // Cette vérification devrait être faite côté serveur dans une vraie application
  // Ici, nous simulons une vérification sécurisée
  try {
    // Simuler un délai réseau
    await new Promise(resolve => setTimeout(resolve, 500));

    // La vérification devrait être faite côté serveur
    if (username === import.meta.env.VITE_ADMIN_USERNAME && 
        password === import.meta.env.VITE_ADMIN_PASSWORD) {
      return {
        success: true,
        user: {
          username: username,
          isAdmin: true
        }
      };
    }

    return {
      success: false,
      error: "Identifiants invalides"
    };
  } catch (error) {
    return {
      success: false,
      error: "Erreur lors de la connexion"
    };
  }
} 