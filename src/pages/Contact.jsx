import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SideButtons from '../components/SideButtons';
import WhatsAppButton from '../components/WhatsAppButton';

function Contact() {
  return (
    <div>
      <Navigation />
      <p>This is the contact page!</p>
      <SideButtons />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default Contact;
