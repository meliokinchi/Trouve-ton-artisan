require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const sequelize = require('./db');
const artisansRoutes = require('./routes/artisans');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Sécurité ────────────────────────────────────────────────────────────────

// Helmet : headers de sécurité HTTP
app.use(helmet());

// CORS : autoriser seulement le frontend
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://votre-domaine.com']
    : ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'x-api-key']
}));

// Rate limiting : max 100 requêtes / 15 minutes par IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Trop de requêtes, veuillez réessayer plus tard.' }
});
app.use(limiter);

// Middleware API Key — restreint l'accès à l'application
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (process.env.NODE_ENV === 'production' && apiKey !== process.env.API_KEY) {
    return res.status(401).json({ success: false, message: 'Clé API invalide' });
  }
  next();
};

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/artisans', checkApiKey, artisansRoutes);

// Route santé
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Route 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route non trouvée' });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Erreur interne du serveur' });
});

// ─── Démarrage ────────────────────────────────────────────────────────────────
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion MySQL établie');
    app.listen(PORT, () => {
      console.log(`🚀 API lancée sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Impossible de se connecter à la base de données:', error);
    process.exit(1);
  }
};

start();
