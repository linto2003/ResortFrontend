import '../css/Section.css';

const rooms = [
  {
    title: "Sea View Room",
    description: "Private balcony · King bed · Ocean breeze",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
  },
  {
    title: "Garden Suite",
    description: "Ground floor · Green views · Quiet mornings",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
  },
  {
    title: "Coastal Deluxe",
    description: "Modern design · Sea-facing windows · Relax space",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    title: "Horizon Suite",
    description: "Spacious interiors · Balcony lounge · Sunset views",
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
  },
];

const Stay = () => (
  <section className="section stay" id="stay">
    <h2>Stay with us</h2>

    <div className="cards modern-cards">
      {rooms.map((room, i) => (
        <div className="card modern-card" key={i}>
          <div className="card-image">
            <img src={`${room.image}?auto=compress&cs=tinysrgb&w=800`} alt={room.title} />
          </div>
          <div className="card-info">
            <h3>{room.title}</h3>
            <p>{room.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stay;
