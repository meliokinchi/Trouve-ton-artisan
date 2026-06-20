import { Link } from 'react-router-dom';
import '../styles/components/_footer.scss';

/**
 * Pied de page commun à toutes les pages
 * - Adresse de l'antenne de Lyon
 * - Liens légaux
 */
function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row gy-4">
          {/* Colonne logo + adresse */}
          <div className="col-md-4">
            <div className="footer-logo">
              <img src="/images/Logo.png" alt="Trouve ton artisan" />
            </div>
            <address className="footer-address">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000" style={{ color: 'rgba(255,255,255,0.8)' }}>
                +33 (0)4 26 73 40 00
              </a>
            </address>
          </div>

          {/* Colonne liens légaux */}
          <div className="col-md-4 offset-md-4">
            <p className="footer-title">Informations légales</p>
            <ul className="footer-links">
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/accessibilite">Accessibilité</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Trouve ton artisan – Région Auvergne-Rhône-Alpes</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
