const { DataTypes } = require('sequelize');
const sequelize = require('../db');

/**
 * Modèle Artisan
 * Représente un artisan de la région Auvergne-Rhône-Alpes
 */
const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  specialite: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  categorie: {
    type: DataTypes.ENUM('Bâtiment', 'Services', 'Fabrication', 'Alimentation'),
    allowNull: false
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false,
    validate: { min: 0, max: 5 }
  },
  ville: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apropos: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: { isEmail: true }
  },
  siteWeb: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'site_web',
    validate: { isUrl: true }
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'artisans',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Artisan;
