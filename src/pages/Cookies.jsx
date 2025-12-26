import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/Cookies/MainContent';
import cookiesHeader from '../assets/cookies_header.jpg';
import CookiePopup from '../components/Cookies/CookiePopup';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';

function Cookies() {
  return (
    <div>
      <Navigation />
      <Header
        bgImage={cookiesHeader}
        title="header.cookies.title"
        text1="header.cookies.text1"
        text2="header.cookies.text2"
      />
      <MainContent />
      <WhatsAppButton />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </div>
  );
}

export default Cookies;
