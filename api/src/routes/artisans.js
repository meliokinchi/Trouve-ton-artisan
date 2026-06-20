const express = require('express');
const { Op } = require('sequelize');
const Artisan = require('../models/Artisan');

const router = express.Router();

/**
 * GET /api/artisans
 * Liste tous les artisans avec filtres optionnels
 * Query params: ?categorie=Bâtiment | ?search=nom | ?top=true
 */
router.get('/', async (req, res) => {
  try {
    const where = {};

    // Filtre par catégorie
    if (req.query.categorie) {
      where.categorie = req.query.categorie;
    }

    // Recherche par nom
    if (req.query.search) {
      where.nom = { [Op.like]: `%${req.query.search}%` };
    }

    // Filtrer les artisans du mois
    if (req.query.top === 'true') {
      where.top = true;
    }

    const artisans = await Artisan.findAll({
      where,
      order: [['note', 'DESC']],
      attributes: ['id', 'nom', 'specialite', 'categorie', 'note', 'ville', 'image', 'top']
    });

    res.json({ success: true, data: artisans });
  } catch (error) {
    console.error('Erreur GET /artisans:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
});

/**
 * GET /api/artisans/:id
 * Récupère la fiche complète d'un artisan par son ID
 */
router.get('/:id', async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    if (!artisan) {
      return res.status(404).json({ success: false, message: 'Artisan non trouvé' });
    }

    res.json({ success: true, data: artisan });
  } catch (error) {
    console.error('Erreur GET /artisans/:id:', error);
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
});

/**
 * GET /api/categories
 * Retourne la liste des catégories distinctes
 */
router.get('/meta/categories', async (req, res) => {
  try {
    const categories = await Artisan.findAll({
      attributes: [[require('sequelize').fn('DISTINCT', require('sequelize').col('categorie')), 'categorie']],
      raw: true
    });
    res.json({ success: true, data: categories.map(c => c.categorie) });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
});

module.exports = router;
