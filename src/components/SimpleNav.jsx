import logo from '../assets/logo.jpg';
import '../css/SimpleNav.css';

const SimpleNav = () => {
  return (
    <nav className="simple-nav">
      <div className="nav-inner">
        
        <a href="#header" className="nav-logo">
          <img src={logo} alt="Cherry-leen Homestay" />
        </a>

        <ul className="nav-links">
          <li><a href="#stay"> Stay</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default SimpleNav;
