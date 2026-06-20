import { useSearchParams, Link } from 'react-router-dom';
import artisansData from '../data/artisansData';
import '../styles/pages/_listeArtisans.scss';

/**
 * Rendu des étoiles
 */
function StarRating({ note }) {
  return (
    <span aria-label={`Note : ${note} sur 5`}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= Math.round(note) ? '#f5a623' : '#dee2e6' }}>★</span>
      ))}
      <small style={{ color: '#6c757d', fontSize: '0.8rem', marginLeft: '0.3rem' }}>({note}/5)</small>
    </span>
  );
}

/**
 * Page liste des artisans
 * Filtre par catégorie (query param ?categorie=) ou recherche (?search=)
 */
function ListeArtisans() {
  const [searchParams] = useSearchParams();
  const categorie = searchParams.get('categorie') || '';
  const search = searchParams.get('search') || '';

  let artisans = artisansData;

  if (categorie) {
    artisans = artisans.filter(a =>
      a.categorie.toLowerCase() === categorie.toLowerCase()
    );
  }

  if (search) {
    artisans = artisans.filter(a =>
      a.nom.toLowerCase().includes(search.toLowerCase())
    );
  }

  const pageTitle = categorie
    ? `Artisans – ${categorie}`
    : search
      ? `Résultats pour "${search}"`
      : 'Tous les artisans';

  return (
    <main className="liste-artisans">
      {/* En-tête de page */}
      <header className="page-header">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p>
            {artisans.length} artisan{artisans.length > 1 ? 's' : ''} trouvé{artisans.length > 1 ? 's' : ''}
          </p>
        </div>
      </header>

      <div className="container">
        {artisans.length === 0 ? (
          <div className="no-results" role="status">
            <h3>Aucun artisan trouvé</h3>
            <p>Essayez une autre catégorie ou modifiez votre recherche.</p>
            <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
          </div>
        ) : (
          <div className="row g-4">
            {artisans.map(artisan => (
              <div className="col-sm-6 col-lg-4" key={artisan.id}>
                <Link
                  to={`/artisans/${artisan.id}`}
                  className="text-decoration-none h-100 d-block"
                  aria-label={`Voir la fiche de ${artisan.nom}`}
                >
                  <article className="artisan-card h-100">
                    <img
                      src={artisan.image}
                      alt={`Photo de ${artisan.nom}`}
                      className="card-img-top"
                      loading="lazy"
                      onError={e => { e.target.src = '/images/artisans/Boucher.jpg'; }}
                    />
                    <div className="card-body">
                      <p className="artisan-specialite">{artisan.specialite}</p>
                      <h2 className="artisan-nom">{artisan.nom}</h2>
                      <StarRating note={artisan.note} />
                      <p className="artisan-localisation">
                        <span aria-hidden="true">📍</span> {artisan.ville}
                      </p>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default ListeArtisans;
