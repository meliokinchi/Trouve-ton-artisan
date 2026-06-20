import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListeArtisans from './pages/ListeArtisans';
import FicheArtisans from './pages/FicheArtisans';
import MentionsLegales from './pages/MentionsLegales';
import DonneesPersonnelles from './pages/DonneesPersonnelles';
import Accessibilite from './pages/Accessibilite';
import Cookies from './pages/Cookies';
import Page404 from './pages/Page404';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/main.scss';

/**
 * Composant racine — définit le routeur et la structure globale
 */
function App() {
  return (
    <Router>
      {/* Lien d'évitement pour l'accessibilité */}
      <a href="#main-content" className="sr-only">Aller au contenu principal</a>

      <Navbar />

      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<ListeArtisans />} />
          <Route path="/artisans/:id" element={<FicheArtisans />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* Toute route inconnue → 404 */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
