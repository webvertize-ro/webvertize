import BackToTop from '../components/BackToTop';
import CookiePopup from '../components/Cookies/CookiePopup';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SideButtons from '../components/SideButtons';

function Services() {
  return (
    <div>
      <Navigation />
      <p>This is the Services page!</p>
      <SideButtons />
      <BackToTop />
      <CookiePopup />
      <Footer />
    </div>
  );
}

export default Services;
