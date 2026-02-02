import '../css/Section.css';
import RotatingText from './RotatingText';
import LaserFlow from './LaserFlow';

const About = () => (
  <section className="section about about-with-beam">
    
     <div className="about-beam-wrap">
        <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#37e3fa"
      />
      </div>

    {/* Content */}
    <div className="about-inner">
      <span className="about-eyebrow">The philosophy</span>

      <h2 className="about-title">
        A home,
        <RotatingText
          texts={[' not a hotel', ' by the sea', ' for slow living']}
          rotationInterval={2200}
        />
      </h2>

      <p className="about-text">
        Built with local materials and intentional silence,
        our coastal retreat blends Konkan simplicity with
        quiet, thoughtful luxury.
        <br /><br />
        No loud crowds. No schedules.
        Just space to breathe, walk barefoot,
        and let the sea set the pace.
      </p>
    </div>
  </section>
);

export default About;
