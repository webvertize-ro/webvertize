import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ServicesStackedCards from '../../components/WebDevelopment/ServicesStackedCards';
import Websites from '../../components/WebDevelopment/Websites';
import CTA from '../../components/CTA';
import SideButtons from '../../components/SideButtons';
import WhatsAppButton from '../../components/WhatsAppButton';
import CookiePopup from '../../components/Cookies/CookiePopup';

function WebsitesPage() {
  return (
    <div>
      <Navigation />
      <Websites />
      <ServicesStackedCards />
      <CTA
        title="Your Next Customers Are Searching Online"
        text="Let’s build a website that helps them find—and choose—you. Book a call to get started."
      />
      <SideButtons />
      <WhatsAppButton />
      <CookiePopup />
      <Footer />
    </div>
  );
}

export default WebsitesPage;
