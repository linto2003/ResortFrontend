import SimpleNav from './SimpleNav';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="resort-header modern" id="header">
      <div className="nav-scrim" />

      <SimpleNav />

      <div className="hero-wrap">
        <div className="hero-content">
          <span className="hero-eyebrow">
            Konkan · Boutique Coastal Stay
          </span>

          <h1>
            Slow mornings,<br />
            salt air,<br />
            no rush.
          </h1>

          <p>
            A private coastal homestay designed for rest,
            warmth, and unhurried living by the sea.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Check Availability
            </a>
            <a href="#gallery" className="btn-secondary">
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
