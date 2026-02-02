import '../css/Section.css';
import CircularGallery from './CircularGallery';

const Gallery = () => (
  <section className="section gallery" id="gallery">
    <div className="gallery-inner">
      
      <span className="gallery-eyebrow">
        A glimpse inside
      </span>

      <h2 className="gallery-title">
        Moments from the coast
      </h2>

      <p className="gallery-subtext">
        Sunlit rooms, slow mornings, ocean air —
        a quiet preview of life by the sea.
      </p>

      <div className="gallery-stage">
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.06}
          scrollEase={0.02}
          scrollSpeed={2}
        />
      </div>

    </div>
  </section>
);

export default Gallery;
