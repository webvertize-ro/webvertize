import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionWebsites from '../components/Portfolio/SectionWebsites';
import SideButtons from '../components/SideButtons';
import bgImage from '../assets/portfolio/portfolio-header.jpg';
import CTA from '../components/CTA';
import WhatsAppButton from '../components/WhatsAppButton';
import CookiePopup from '../components/Cookies/CookiePopup';

function Portfolio() {
  return (
    <div>
      <Navigation />
      <Header
        bgImage={bgImage}
        title="Projects & Case Studies"
        text1="Explore our projects and discover how web development and advertising can become a clear and enjoyable journey - not a complicated one."
        text2="At Webvertize, we believe building an online presence is a collaborative process based on communication, transparency and trust. From concept to launch, we work closely with our clients to create digital solutions that support their business goals and have a good looking, moder design - all while keeping the entire process smooth, efficient and enjoyable."
      />
      <SectionWebsites />

      <CTA
        title="Want to start a project?"
        text="Let’s chat about your ideas and turn them into a clear, well-designed digital solution. Schedule a call and we can start building it with you today!"
      />
      <SideButtons />
      <WhatsAppButton />
      <CookiePopup />
      <Footer />
    </div>
  );
}

export default Portfolio;
