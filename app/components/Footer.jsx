export default function Footer() {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/">
              <img src="/img/la-ou-pala-logo.png" alt="Logo La où Pala" />
            </a>
          </div>
  
          <div className="footer-links">
            <nav>
              <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/realisations">Réalisations</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/a-propos">À propos</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
  
        <div className="footer-legal">
          <a href="/mentions-legales">Mentions légales</a>
        </div>
      </footer>
    );
  }
  