import '../css/Section.css';

const CTA = () => (
  <section className="section cta" id="contact">
    <div className="cta-inner">
      
      <span className="cta-eyebrow">
        Get in touch
      </span>

      <h2 className="cta-title">
        Ready to slow down?
      </h2>

      <p className="cta-text">
        For best prices and availability,
        message us directly on WhatsApp.
      </p>

      <a
        href="https://wa.me/917083824454"
        className="cta-button"
        target="_blank"
        rel="noreferrer"
      >
        <span>Chat on WhatsApp</span>
        <span className="cta-arrow">→</span>
      </a>

    </div>
  </section>
);

export default CTA;
