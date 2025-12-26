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
import OurPrinciples from '../components/OurPrinciples';
import { useTranslation } from 'react-i18next';

const StyledHome = styled.div`
  background-color: hsl(205, 52%, 16%, 0.9);
  color: #fff;
`;

const OurProcessContainer = styled.div`
  border-radius: 10px;
`;

function Home() {
  const { t } = useTranslation();

  return (
    <StyledHome>
      <Navigation />
      <Header
        title="header.homepage.title"
        text1="header.homepage.text1"
        text2="header.homepage.text2"
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

      <div className="container">
        <OurPrinciples />
      </div>
      <CTA title={'CTA.home.title'} text={'CTA.home.text'} />
      <SideButtons />
      <WhatsAppButton />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </StyledHome>
  );
}

export default Home;
