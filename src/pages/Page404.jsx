import { Link } from 'react-router-dom';

/**
 * Page 404 - Affichée pour toute route inconnue
 */
function Page404() {
  return (
    <main>
      <div className="container py-5 text-center">
        <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🔨</div>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0074c7', marginBottom: '0.5rem' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#384050', marginBottom: '1rem' }}>Page non trouvée</h2>
        <p style={{ color: '#6c757d', maxWidth: '480px', margin: '0 auto 2rem' }}>
          La page que vous avez demandée n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="btn btn-primary"
          style={{ backgroundColor: '#0074c7', border: 'none', borderRadius: '0.5rem', padding: '0.7rem 2rem', fontWeight: 600 }}
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}

export default Page404;
