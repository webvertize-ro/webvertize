import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServicesStackedCards from '../../components/WebDevelopment/ServicesStackedCards';
import Websites from '../../components/WebDevelopment/WebsitesFeatures';
import CTA from '../../components/CTA';
import SideButtons from '../../components/SideButtons';
import WhatsAppButton from '../../components/WhatsAppButton';
import CookiePopup from '../../components/Cookies/CookiePopup';
import styled from 'styled-components';
import BackToTop from '../../components/BackToTop';
import Header from '../../components/Header';
import websitesHeader from '../../assets/websites_header.jpg';
import WebsitesIntro from '../../components/WebDevelopment/WebsitesIntro';
import WebsitesResults from '../../components/WebDevelopment/WebsitesResults';
import WebsitesFeatures from '../../components/WebDevelopment/WebsitesFeatures';
import { useTranslation } from 'react-i18next';

const StyledWebsitesPage = styled.div`
  background-color: hsl(203, 53%, 13%, 0.9);
  color: #fff;
`;

function WebsitesPage() {
  return (
    <StyledWebsitesPage>
      <Navigation />
      <Header
        title="header.websites.title"
        text1="header.websites.text1"
        text2="header.websites.text2"
        bgImage={websitesHeader}
      />
      <WebsitesIntro />
      <WebsitesFeatures />
      <ServicesStackedCards />
      <WebsitesResults />
      <CTA title="CTA.websites.title" text="CTA.websites.text" />
      <SideButtons />
      <WhatsAppButton />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </StyledWebsitesPage>
  );
}

export default WebsitesPage;
