import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import artisansData from '../data/artisansData';
import '../styles/pages/_ficheArtisans.scss';

/**
 * Rendu des étoiles
 */
function StarRating({ note }) {
  return (
    <span aria-label={`Note : ${note} sur 5`}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= Math.round(note) ? '#f5a623' : '#dee2e6', fontSize: '1.25rem' }}>★</span>
      ))}
      <strong style={{ marginLeft: '0.5rem', fontSize: '1rem' }}>{note}/5</strong>
    </span>
  );
}

/**
 * Fiche détail d'un artisan
 * - Infos complètes
 * - Section "À propos"
 * - Formulaire de contact (nom, email, objet, message)
 */
function FicheArtisans() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artisan = artisansData.find(a => a.id === parseInt(id));

  const [formData, setFormData] = useState({ nom: '', email: '', objet: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!artisan) {
    navigate('/404');
    return null;
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide.';
    if (!formData.objet.trim()) newErrors.objet = "L'objet est requis.";
    if (!formData.message.trim()) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Envoi réel via API (à connecter)
    setSubmitted(true);
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  return (
    <main className="fiche-artisan">
      <div className="container">
        {/* Bouton retour */}
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
          aria-label="Retour à la liste"
        >
          ← Retour
        </button>

        {/* En-tête artisan */}
        <header className="artisan-header">
          <img
            src={artisan.image}
            alt={`Photo de ${artisan.nom}`}
            className="artisan-photo"
            onError={e => { e.target.src = '/images/artisans/Boucher.jpg'; }}
          />
          <div className="artisan-info">
            <h1>{artisan.nom}</h1>
            <span className="badge-specialite">{artisan.specialite}</span>
            <div className="artisan-meta">
              <span>📍 {artisan.ville}</span>
              <StarRating note={artisan.note} />
            </div>
          </div>
        </header>

        <div className="row g-4">
          {/* À propos */}
          <div className="col-lg-6">
            <section className="artisan-about" aria-labelledby="apropos-title">
              <h2 id="apropos-title">À propos</h2>
              <p>{artisan.apropos}</p>
              {artisan.siteWeb && (
                <a
                  href={artisan.siteWeb}
                  className="website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visiter le site web de ${artisan.nom}`}
                >
                  🌐 Visiter le site web
                </a>
              )}
            </section>
          </div>

          {/* Formulaire de contact */}
          <div className="col-lg-6">
            <section className="contact-form-card" aria-labelledby="contact-title">
              <h2 id="contact-title">Contacter {artisan.nom}</h2>

              {submitted ? (
                <div className="success-msg" role="alert">
                  ✅ Votre message a été envoyé ! {artisan.nom} vous répondra sous 48h.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Votre nom *</label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                      value={formData.nom}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Votre email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="objet" className="form-label">Objet *</label>
                    <input
                      id="objet"
                      name="objet"
                      type="text"
                      className={`form-control ${errors.objet ? 'is-invalid' : ''}`}
                      value={formData.objet}
                      onChange={handleChange}
                    />
                    {errors.objet && <div className="invalid-feedback">{errors.objet}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>

                  <button type="submit" className="btn-submit">
                    Envoyer le message
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FicheArtisans;
