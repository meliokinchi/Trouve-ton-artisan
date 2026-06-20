import { Link } from 'react-router-dom';
import artisansData from '../data/artisansData';
import '../styles/pages/_home.scss';

/**
 * Rendu des étoiles selon une note sur 5
 */
function StarRating({ note }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= Math.round(note) ? '#f5a623' : '#dee2e6' }}>★</span>
    );
  }
  return <span className="stars" aria-label={`Note : ${note} sur 5`}>{stars} <small style={{ color: '#6c757d', fontSize: '0.8rem' }}>({note}/5)</small></span>;
}

/**
 * Card d'un artisan du mois
 */
function ArtisanCard({ artisan }) {
  return (
    <Link
      to={`/artisans/${artisan.id}`}
      className="text-decoration-none h-100"
      aria-label={`Voir la fiche de ${artisan.nom}`}
    >
      <div className="card h-100 shadow-sm border-0 artisan-card-home" style={{ borderRadius: '0.75rem', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,116,199,0.15)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
      >
        <img
          src={artisan.image}
          alt={`Photo de ${artisan.nom}`}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
          loading="lazy"
          onError={e => { e.target.src = '/images/artisans/Boucher.jpg'; }}
        />
        <div className="card-body p-3">
          <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0074c7', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
            {artisan.specialite}
          </p>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#384050', marginBottom: '0.4rem' }}>
            {artisan.nom}
          </h3>
          <StarRating note={artisan.note} />
          <p style={{ fontSize: '0.85rem', color: '#6c757d', marginTop: '0.5rem' }}>
            📍 {artisan.ville}
          </p>
        </div>
      </div>
    </Link>
  );
}

/**
 * Page d'accueil
 * - Section hero avec catégories
 * - "Comment trouver mon artisan ?" (étapes 1 à 4)
 * - Les 3 artisans du mois (top: true)
 */
function Home() {
  const artisansDuMois = artisansData.filter(a => a.top).slice(0, 3);

  const categories = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation'];

  const steps = [
    { num: 1, title: 'Choisissez une catégorie', desc: 'Sélectionnez la catégorie d\'artisanat qui correspond à votre besoin dans le menu de navigation.' },
    { num: 2, title: 'Choisissez un artisan', desc: 'Parcourez les fiches et choisissez l\'artisan qui correspond le mieux à vos attentes.' },
    { num: 3, title: 'Contactez-le', desc: 'Utilisez le formulaire de contact sur sa fiche pour lui envoyer un message directement.' },
    { num: 4, title: 'Obtenez une réponse', desc: 'L\'artisan vous répondra dans un délai de 48 heures.' },
  ];

  return (
    <main>
      {/* Section Hero */}
      <section className="home-hero" aria-label="Accueil">
        <div className="container">
          <h1>Trouve ton artisan !</h1>
          <p>Trouvez les meilleurs artisans de la région Auvergne-Rhône-Alpes près de chez vous.</p>
          <div className="hero-categories" role="list">
            {categories.map(cat => (
              <Link
                key={cat}
                to={`/artisans?categorie=${encodeURIComponent(cat)}`}
                className="btn-category"
                role="listitem"
                aria-label={`Voir les artisans en ${cat}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section étapes */}
      <section className="how-it-works" aria-labelledby="how-it-works-title">
        <div className="container">
          <h2 id="how-it-works-title">Comment trouver mon artisan ?</h2>
          <div className="row g-4">
            {steps.map(step => (
              <div className="col-sm-6 col-lg-3" key={step.num}>
                <article className="step-card">
                  <div className="step-number" aria-hidden="true">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section artisans du mois */}
      <section className="artisans-du-mois" aria-labelledby="artisans-mois-title">
        <div className="container">
          <h2 id="artisans-mois-title">Les artisans du mois</h2>
          <p className="section-subtitle">Découvrez nos artisans sélectionnés ce mois-ci</p>
          <div className="row g-4">
            {artisansDuMois.map(artisan => (
              <div className="col-md-4" key={artisan.id}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
