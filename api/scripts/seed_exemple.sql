-- ============================================================
-- Script d'alimentation de la base de données
-- Projet : Trouve ton artisan - Région Auvergne-Rhône-Alpes
-- ============================================================

USE trouve_ton_artisan;

-- Catégories
INSERT INTO categories (nom) VALUES
  ('Alimentation'),
  ('Bâtiment'),
  ('Fabrication'),
  ('Services');

-- Spécialités (rattachées à leurs catégories)
INSERT INTO specialites (nom, id_categorie) VALUES
  ('Boucher',       1),
  ('Boulanger',     1),
  ('Chocolatier',   1),
  ('Traiteur',      1),
  ('Chauffagiste',  2),
  ('Électricien',   2),
  ('Menuisier',     2),
  ('Plombier',      2),
  ('Bijoutier',     3),
  ('Couturier',     3),
  ('Ferronnier',    3),
  ('Coiffeur',      4),
  ('Fleuriste',     4),
  ('Toiletteur',    4),
  ('Webdesign',     4);

-- Artisans
INSERT INTO artisans (nom, id_specialite, note, ville, apropos, email, site_web, image, top) VALUES
('Boucherie Dumont',      1, 4.5, 'Lyon',             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com',                NULL,                                    '/images/artisans/Boucher.jpg',      FALSE),
('Au pain chaud',         2, 4.8, 'Montélimar',       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com',                   NULL,                                    '/images/artisans/Boulanger.jpg',    TRUE),
('Chocolaterie Labbé',    3, 4.9, 'Lyon',             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com',              'https://chocolaterie-labbe.fr',         '/images/artisans/Chocolatier.jpg',  TRUE),
('Traiteur Truchon',      4, 4.1, 'Lyon',             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr',               'https://truchon-traiteur.fr',           '/images/artisans/Traiteur.jpg',     FALSE),
('Orville Salmons',       5, 5.0, 'Evian',            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com',                        NULL,                                    '/images/artisans/Chauffagiste.jpg', TRUE),
('Mont Blanc Électricité',6, 4.5, 'Chamonix',         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com',        'https://mont-blanc-electricite.com',    '/images/artisans/Électricien.jpg',  FALSE),
('Boutot & fils',         7, 4.7, 'Bourg-en-Bresse',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com',               'https://boutot-menuiserie.com',         '/images/artisans/Menuisier.jpg',    FALSE),
('Vallis Bellemare',      8, 4.0, 'Vienne',           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com',                     'https://plomberie-bellemare.com',       '/images/artisans/Plombier.jpg',     FALSE),
('Claude Quinn',          9, 4.2, 'Aix-les-Bains',   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com',                    NULL,                                    '/images/artisans/Bijoutier.jpg',    FALSE),
('Amitee Lécuyer',        10,4.5, 'Annecy',           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com',                      'https://lecuyer-couture.com',           '/images/artisans/Couturier.jpg',    FALSE),
('Ernest Carignan',       11,5.0, 'Le Puy-en-Velay',  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com',                     NULL,                                    '/images/artisans/Ferronier.jpg',    FALSE),
('Royden Charbonneau',    12,3.8, 'Saint-Priest',     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com',                   NULL,                                    '/images/artisans/Coiffeur-1.jpg',   FALSE),
('Leala Dennis',          12,3.8, 'Chambéry',         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr',                       'https://coiffure-leala-chambery.fr',    '/images/artisans/Coiffeur-2.jpg',   FALSE),
("C'est sup'hair",        12,4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com',                        'https://sup-hair.fr',                   '/images/artisans/Coiffeur-3.jpg',   FALSE),
('Le monde des fleurs',   13,4.6, 'Annonay',          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr',    'https://le-monde-des-fleurs-annonay.fr','/images/artisans/Fleuriste.jpg',    FALSE),
('Valérie Laderoute',     14,4.5, 'Valence',          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com',                     NULL,                                    '/images/artisans/Toiletteur.jpg',   FALSE),
('CM Graphisme',          15,4.4, 'Valence',          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com',                  'https://cm-graphisme.com',              '/images/artisans/Webdesign.jpg',    FALSE);
