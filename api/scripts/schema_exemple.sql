-- ============================================================
-- Script de création de la base de données
-- Projet : Trouve ton artisan - Région Auvergne-Rhône-Alpes
-- ============================================================

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

-- Table des catégories
CREATE TABLE IF NOT EXISTS categories (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des spécialités
CREATE TABLE IF NOT EXISTS specialites (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL UNIQUE,
  id_categorie INT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_specialite_categorie FOREIGN KEY (id_categorie)
    REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des artisans
CREATE TABLE IF NOT EXISTS artisans (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  id_specialite INT UNSIGNED NOT NULL,
  note DECIMAL(2,1) NOT NULL DEFAULT 0.0,
  ville VARCHAR(100) NOT NULL,
  apropos TEXT,
  email VARCHAR(255) NOT NULL,
  site_web VARCHAR(255),
  image VARCHAR(255),
  top BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_artisan_specialite FOREIGN KEY (id_specialite)
    REFERENCES specialites(id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT chk_note CHECK (note >= 0 AND note <= 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Vue pour faciliter les requêtes frontend
CREATE OR REPLACE VIEW v_artisans_cards AS
SELECT
  a.id,
  a.nom,
  s.nom AS specialite,
  c.nom AS categorie,
  a.note,
  a.ville,
  a.apropos,
  a.email,
  a.site_web,
  a.image,
  a.top
FROM artisans a
JOIN specialites s ON a.id_specialite = s.id
JOIN categories c ON s.id_categorie = c.id;
