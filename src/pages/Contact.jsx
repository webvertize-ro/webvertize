import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SideButtons from '../components/SideButtons';
import WhatsAppButton from '../components/WhatsAppButton';
import Header from '../components/Header';
import contactHeaderImg from '../assets/contact_us_header.jpg';
import MainSection from './Contact/MainSection';
import CookiePopup from '../components/Cookies/CookiePopup';
import BackToTop from '../components/BackToTop';
import styled from 'styled-components';

const StyledContact = styled.div`
  background-color: rgba(58, 97, 122, 0.8);
  color: #fff;
`;

function Contact() {
  return (
    <StyledContact>
      <Navigation />
      <Header
        bgImage={contactHeaderImg}
        title="Let's Discuss Your Digital Project"
        text1="Whether you’re planning a new website, a custom web application or an advertising campaign, we’re here to listen and help you find the right solution for your business."
        text2="Tell us about your goals, challenges or ideas and we’ll take it from there. We believe great digital projects start with clear communication, collaboration and a conversation that feels easy and transparent from the very beginning."
      />
      <MainSection />
      <SideButtons />
      <BackToTop />
      <WhatsAppButton />
      <CookiePopup />
      <Footer />
    </StyledContact>
  );
}

export default Contact;
