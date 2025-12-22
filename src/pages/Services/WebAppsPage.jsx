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

const StyledWebAppsPage = styled.div`
  background-color: #1f465f;
  color: #fff;
`;

function WebAppsPage() {
  return (
    <StyledWebAppsPage>
      <Navigation />
      <WebApps />
      <ServicesStackedCards />
      <CTA
        title="The Right Tools Can Change Everything"
        text="Let's build an app that fits the workflow of your business."
      />
      <SideButtons />
      <WhatsAppButton />
      <CookiePopup />
      <BackToTop />
      <Footer />
    </StyledWebAppsPage>
  );
}

export default WebAppsPage;
