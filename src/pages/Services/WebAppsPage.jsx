import Navigation from '../../components/Navigation';
import WebApps from '../../components/WebDevelopment/WebApps';
import ServicesStackedCards from '../../components/WebDevelopment/ServicesStackedCards';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import SideButtons from '../../components/SideButtons';
import WhatsAppButton from '../../components/WhatsAppButton';
import CookiePopup from '../../components/Cookies/CookiePopup';
import styled from 'styled-components';
import BackToTop from '../../components/BackToTop';
import WebAppsFeatures from '../../components/WebDevelopment/WebAppsFeatures';
import WebAppsIntro from '../../components/WebDevelopment/WebAppsIntro';
import Header from '../../components/Header';
import webAppsHeader from '../../assets/web_apps_header.jpg';
import WebAppsResults from '../../components/WebDevelopment/WebAppsResults';
import { useTranslation } from 'react-i18next';

const StyledWebAppsPage = styled.div`
  background-color: #1f465f;
  color: #fff;
`;

function WebAppsPage() {
  const { t } = useTranslation();
  return (
    <StyledWebAppsPage>
      <Navigation />
      <Header
        title="header.web-apps.title"
        text1="header.web-apps.text1"
        text2="header.web-apps.text2"
        bgImage={webAppsHeader}
      />
      <WebAppsIntro />
      <WebAppsFeatures />
      <WebAppsResults />
      <ServicesStackedCards />
      <CTA title="CTA.web-apps.title" text="CTA.web-apps.text" />
      <SideButtons />
      <WhatsAppButton />
      <CookiePopup />
      <BackToTop />
      <Footer />
    </StyledWebAppsPage>
  );
}

export default WebAppsPage;
