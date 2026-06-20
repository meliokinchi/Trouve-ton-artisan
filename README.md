# Trouve ton artisan 🔨

Plateforme dédiée aux artisans de la région Auvergne-Rhône-Alpes, permettant aux particuliers de trouver un artisan et de le contacter facilement.

---

## 📋 Prérequis

- **Node.js** v18+ — [télécharger](https://nodejs.org/)
- **npm** v9+
- **MySQL** ou **MariaDB** v10.5+

---

## 🚀 Installation et lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/VOTRE_USERNAME/trouve-ton-artisan.git
cd trouve-ton-artisan
```

### 2. Base de données

```bash
# Se connecter à MySQL
mysql -u root -p

# Exécuter les scripts dans l'ordre
source api/scripts/schema_exemple.sql
source api/scripts/seed_exemple.sql
```

### 3. API (Back-end)

```bash
cd api
npm install

# Configurer le fichier .env
cp .env .env.local
# Modifier .env.local avec vos identifiants MySQL

npm run dev
# L'API démarre sur http://localhost:3001
```

### 4. Front-end

```bash
# Depuis la racine du projet
npm install
npm run dev
# Le site démarre sur http://localhost:5173
```

---

## 🌐 Endpoints API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/artisans` | Liste tous les artisans |
| GET | `/api/artisans?categorie=Bâtiment` | Filtre par catégorie |
| GET | `/api/artisans?search=dumont` | Recherche par nom |
| GET | `/api/artisans?top=true` | Artisans du mois |
| GET | `/api/artisans/:id` | Fiche complète d'un artisan |
| GET | `/health` | État du serveur |

---

## 🏗️ Stack technique

**Front-end :** React 18, React Router v6, Bootstrap 5, Sass  
**Back-end :** Node.js, Express, Sequelize, MySQL  
**Outils :** Vite, Git, GitHub

---

## 📁 Structure du projet

```
trouve-ton-artisan/
├── api/                    # Back-end Node.js
│   ├── src/
│   │   ├── models/         # Modèles Sequelize
│   │   ├── routes/         # Routes Express
│   │   ├── db.js           # Configuration BDD
│   │   └── server.js       # Serveur Express
│   └── scripts/            # Scripts SQL
├── src/                    # Front-end React
│   ├── assets/             # Polices, images
│   ├── components/         # Composants réutilisables
│   ├── data/               # Données statiques
│   ├── pages/              # Pages de l'application
│   └── styles/             # Fichiers SCSS
└── public/                 # Ressources publiques
```
