import { jwtDecode } from 'jwt-decode';

interface AuthToken {
  sub: string;
  isAdmin: boolean;
  exp: number;
}

class ApiService {
  private static instance: ApiService;
  private tokenKey = 'auth_token';
  private refreshTokenKey = 'refresh_token';
  private loginAttempts: { [key: string]: { count: number; timestamp: number } } = {};
  private readonly maxAttempts = 5;
  private readonly lockoutDuration = 15 * 60 * 1000; // 15 minutes

  private constructor() {}

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private isLockedOut(username: string): boolean {
    const attempts = this.loginAttempts[username];
    if (!attempts) return false;

    if (attempts.count >= this.maxAttempts) {
      const timeElapsed = Date.now() - attempts.timestamp;
      if (timeElapsed < this.lockoutDuration) {
        return true;
      }
      // Réinitialiser après la période de verrouillage
      delete this.loginAttempts[username];
    }
    return false;
  }

  private updateLoginAttempts(username: string, success: boolean) {
    if (success) {
      delete this.loginAttempts[username];
      return;
    }

    if (!this.loginAttempts[username]) {
      this.loginAttempts[username] = { count: 0, timestamp: Date.now() };
    }
    
    this.loginAttempts[username].count++;
    this.loginAttempts[username].timestamp = Date.now();
  }

  private generateToken(username: string): { token: string; refreshToken: string } {
    // Simulation de génération de tokens JWT
    const token = btoa(JSON.stringify({
      sub: username,
      isAdmin: true,
      exp: Date.now() + 3600000 // 1 heure
    }));

    const refreshToken = btoa(JSON.stringify({
      sub: username,
      exp: Date.now() + 7 * 24 * 3600000 // 7 jours
    }));

    return { token, refreshToken };
  }

  public async login(username: string, password: string) {
    // Validation des entrées
    if (!username || !password || 
        typeof username !== 'string' || 
        typeof password !== 'string') {
      throw new Error('Données d\'entrée invalides');
    }

    // Vérification du verrouillage
    if (this.isLockedOut(username)) {
      const remainingTime = Math.ceil(
        (this.lockoutDuration - (Date.now() - this.loginAttempts[username].timestamp)) / 60000
      );
      throw new Error(`Compte temporairement verrouillé. Réessayez dans ${remainingTime} minutes`);
    }

    try {
      // Simulation d'une vérification côté serveur
      const isValid = username === import.meta.env.VITE_ADMIN_USERNAME && 
                     password === import.meta.env.VITE_ADMIN_PASSWORD;

      this.updateLoginAttempts(username, isValid);

      if (!isValid) {
        const remainingAttempts = this.maxAttempts - (this.loginAttempts[username]?.count || 0);
        throw new Error(`Identifiants invalides. ${remainingAttempts} tentatives restantes`);
      }

      const { token, refreshToken } = this.generateToken(username);
      localStorage.setItem(this.tokenKey, token);
      localStorage.setItem(this.refreshTokenKey, refreshToken);

      return {
        success: true,
        user: {
          username,
          isAdmin: true
        }
      };
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw error;
    }
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) return false;

    try {
      const decoded = jwtDecode<AuthToken>(token);
      return decoded.exp > Date.now();
    } catch {
      return false;
    }
  }

  public getCurrentUser() {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) return null;

    try {
      const decoded = jwtDecode<AuthToken>(token);
      if (decoded.exp <= Date.now()) {
        this.logout();
        return null;
      }
      return {
        username: decoded.sub,
        isAdmin: decoded.isAdmin
      };
    } catch {
      return null;
    }
  }
} 