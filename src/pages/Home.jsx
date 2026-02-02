import Header from './sections/Header';
import Intro from './sections/Intro';
import Rooms from './sections/Rooms';
import Experiences from './sections/Experiences';
import Facilities from './sections/Facilities';
import Spa from './sections/Spa';
import CTA from './sections/CTA';
import Stories from './sections/Stories';
import Footer from './sections/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Rooms />
      <Experiences />
      <Facilities />
      <Spa />
      <CTA />
      <Stories />
      <Footer />
    </>
  );
};

export default Home;
