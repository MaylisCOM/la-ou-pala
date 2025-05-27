export default function Cta({ content }) {
  return (
    <section className="contact-cta">
      <a href={content.ctaLink} className="cta-button">{content.ctaText}</a>
      <div className="social-icons">
        <a href={content.socialFacebook} target="_blank" aria-label="Facebook">
          <i className="ai-facebook-fill"></i>
        </a>
        <a href={content.socialInstagram} target="_blank" aria-label="Instagram">
          <i className="ai-instagram-fill"></i>
        </a>
        <a href={content.socialLinkedin} target="_blank" aria-label="LinkedIn">
          <i className="ai-linkedin-fill"></i>
        </a>
      </div>
    </section>
  );
}
