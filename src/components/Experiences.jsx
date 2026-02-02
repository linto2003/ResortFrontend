import '../css/Section.css';
import SplitText from './SplitText';

const experiences = [
  "Sunset walks by the shore",
  "Bonfire evenings under the stars",
  "Home-cooked Konkan meals",
  "Slow mornings & meditation",
  
];

const Experiences = () => (
  <section className="section experiences" id="experiences">
    <span className="section-eyebrow">At the retreat</span>

    <h2 className="experiences-title">
      <SplitText text="Experiences that slow you down" />
    </h2>

    <ul className="experience-list">
      {experiences.map((item, idx) => (
        <li key={idx}>
          <SplitText text={item} delay={idx * 0.15} />
        </li>
      ))}
    </ul>
  </section>
);

export default Experiences;
