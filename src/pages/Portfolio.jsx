import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SectionWebsites from '../components/Portfolio/SectionWebsites';
import SideButtons from '../components/SideButtons';
import bgImage from '../assets/portfolio/portfolio-header.jpg';
import CTA from '../components/CTA';
import WhatsAppButton from '../components/WhatsAppButton';
import CookiePopup from '../components/Cookies/CookiePopup';
import BackToTop from '../components/BackToTop';
import styled from 'styled-components';

const StyledPortfolio = styled.div`
  background-color: #2a4f68;
  color: #fff;
`;

function Portfolio() {
  return (
    <StyledPortfolio>
      <Navigation />
      <Header
        bgImage={bgImage}
        title="header.portfolio.title"
        text1="header.portfolio.text1"
        text2="header.portfolio.text2"
      />
      <SectionWebsites />

      <CTA
        title="CTA.content-creation-ads.title"
        text="CTA.content-creation-ads.text"
      />
      <SideButtons />
      <BackToTop />
      <WhatsAppButton />
      <CookiePopup />
      <Footer />
    </StyledPortfolio>
  );
}

export default Portfolio;
