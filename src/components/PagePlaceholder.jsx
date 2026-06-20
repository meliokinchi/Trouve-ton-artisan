/**
 * Composant générique pour les pages légales en construction
 * (Mentions légales, Cookies, Données personnelles, Accessibilité)
 */
function PagePlaceholder({ title }) {
  return (
    <main>
      <div className="container py-5">
        <h1 className="mb-4" style={{ color: '#384050', fontWeight: 700 }}>{title}</h1>
        <div
          className="p-4 rounded"
          style={{ backgroundColor: '#f1f8fc', border: '1px solid #dee2e6' }}
        >
          <p style={{ color: '#6c757d' }}>
            🚧 <strong>Page en construction</strong> — Ce contenu sera renseigné prochainement
            par un cabinet spécialisé.
          </p>
        </div>
      </div>
    </main>
  );
}

export default PagePlaceholder;
