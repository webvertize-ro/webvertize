import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContent from '../components/Cookies/MainContent';
import cookiesHeader from '../assets/cookies_header.jpg';

function Cookies() {
  return (
    <div>
      <Navigation />
      <Header
        bgImage={cookiesHeader}
        title="Webvertize Cookie Policy"
        text1="At the moment, Webvertize does not use cookies on this website. If this changes in the future, we will update this page accordingly and explain exactly what data is collected and why."
        text2="Below you'll find general information about cookies - what they are and how they're commonly used - along with details about how cookies may be implemented on Webvertize when applicable."
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Cookies;
