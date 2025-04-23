import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();

// Middlewares de sécurité
app.use(helmet()); // Protection contre les vulnérabilités web courantes
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());

// Rate limiting - limite le nombre de requêtes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limite chaque IP à 100 requêtes par fenêtre
});
app.use('/api', limiter);

// Simulation d'une base de données (à remplacer par une vraie BD)
let hashedPassword: string;
bcrypt.hash(process.env.ADMIN_PASSWORD || '', 10).then(hash => {
  hashedPassword = hash;
});

// Route d'authentification
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Vérification des identifiants
    if (username !== process.env.ADMIN_USERNAME) {
      return res.status(401).json({ 
        success: false, 
        error: "Identifiants invalides" 
      });
    }

    // Vérification du mot de passe
    const passwordValid = await bcrypt.compare(password, hashedPassword);
    if (!passwordValid) {
      return res.status(401).json({ 
        success: false, 
        error: "Identifiants invalides" 
      });
    }

    // Création du token JWT
    const token = jwt.sign(
      { username, isAdmin: true },
      process.env.JWT_SECRET || 'votre-secret-jwt',
      { expiresIn: '1h' }
    );

    // Envoi du token dans un cookie httpOnly
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000 // 1 heure
    });

    return res.json({
      success: true,
      user: {
        username,
        isAdmin: true
      }
    });
  } catch (error) {
    console.error('Erreur d\'authentification:', error);
    return res.status(500).json({
      success: false,
      error: "Erreur interne du serveur"
    });
  }
});

// Middleware de vérification du JWT
const authenticateJWT = (req: any, res: any, next: any) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Non authentifié" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET || 'votre-secret-jwt');
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token invalide" });
  }
};

// Route protégée exemple
app.get('/api/admin/protected', authenticateJWT, (req, res) => {
  res.json({ message: "Route protégée accessible" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 