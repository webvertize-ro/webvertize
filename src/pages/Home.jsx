import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SideButtons from '../components/SideButtons';
import WebDev from '../components/WebDev';
import Ads from '../components/Ads';
import OurMission from '../components/OurMission';
import CTA from '../components/CTA';
import WhatsAppButton from '../components/WhatsAppButton';

function Home() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <WebDev />
      </div>
      <div className="container">
        <Ads />
      </div>
      <div className="container">
        <OurMission />
      </div>

      <CTA
        title={"Let's build your digital presence together"}
        text={
          'Book a discovery call, share your goalse and start shaping you next step in the digital world.'
        }
      />

      <SideButtons />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default Home;
