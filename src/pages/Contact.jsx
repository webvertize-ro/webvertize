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
        title="header.contact.title"
        text1="header.contact.text1"
        text2="header.contact.text2"
      />
      <MainSection />
      {/* <SideButtons /> */}
      <BackToTop />
      <WhatsAppButton />
      <CookiePopup />
      <Footer />
    </StyledContact>
  );
}

export default Contact;
