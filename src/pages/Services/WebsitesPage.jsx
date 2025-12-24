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
  const { t } = useTranslation();
  return (
    <StyledWebsitesPage>
      <Navigation />
      <Header
        title="Websites Built to Represent Your Business — Clearly and
              Professionally"
        text1="Your business website is a reflection of your brand and a powerful tool to engage customers."
        text2="At Webvertize, we create websites that are visually appealing, easy to navigate and fully responsive, ensuring a seamless experience on any device. We collaborate with you every step of the way in order to build your online presence in an enjoyabale way."
        bgImage={websitesHeader}
      />
      <WebsitesIntro />
      <WebsitesFeatures />
      <WebsitesResults />
      <ServicesStackedCards />
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
