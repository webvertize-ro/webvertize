import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SideButtons from '../components/SideButtons';
import WebDev from '../components/WebDev';
import Ads from '../components/Ads';
import OurMission from '../components/OurMission';
import CTA from '../components/CTA';
import WhatsAppButton from '../components/WhatsAppButton';
import OurProcess from '../components/OurProcess';
import Header from '../components/Header';
import homepageHeader from '../assets/homepage_header.jpg';
import CookiePopup from '../components/Cookies/CookiePopup';
import ScheduleACallButton from '../components/ScheduleACallButton';
import styled from 'styled-components';
import BackToTop from '../components/BackToTop';

const StyledHome = styled.div`
  background-color: hsl(205, 52%, 16%, 0.9);
  color: #fff;
`;

const OurProcessContainer = styled.div`
  border-radius: 10px;
`;

function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Header
        title="Websites, Web Applications & Advertising Built for Real Business Growth"
        text1="At Webvertize, we help businesses build a strong, professional online presence through custom websites, web applications and performance-driven advertising. From modern presentation websites to tailored internal tools and strategic ad campaigns, we deliver digital solutions aligned with your business goals."
        text2="We believe the journey to digital success should be enjoyable and collaborative — not stressful. That’s why we work closely with you at every step, from strategy and design to development, launch and ongoing optimization, delivering reliable solutions that support your business long-term."
        bgImage={homepageHeader}
      />
      <div className="container">
        <WebDev />
      </div>
      <div className="container">
        <Ads />
      </div>

      <OurProcess />

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
      <BackToTop />
      <CookiePopup />
      <Footer />
    </StyledHome>
  );
}

export default Home;
