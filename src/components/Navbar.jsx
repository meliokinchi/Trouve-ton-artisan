import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/_navbar.scss';

// Catégories récupérées depuis la BDD (via l'API) — ici en statique
const categories = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation'];

/**
 * Barre de navigation principale
 * - Logo cliquable vers l'accueil
 * - Menu des 4 catégories
 * - Barre de recherche par nom d'artisan
 */
function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/artisans?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/images/Logo.png" alt="Trouve ton artisan - Accueil" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Menu catégories */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <Link
                  className="nav-link"
                  to={`/artisans?categorie=${encodeURIComponent(cat)}`}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>

          {/* Barre de recherche */}
          <form className="d-flex search-form" onSubmit={handleSearch} role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Rechercher un artisan..."
              aria-label="Rechercher un artisan"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn-search" type="submit" aria-label="Lancer la recherche">
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
