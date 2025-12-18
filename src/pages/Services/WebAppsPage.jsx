import Navigation from '../../components/Navigation';
import WebApps from '../../components/WebDevelopment/WebApps';
import ServicesStackedCards from '../../components/WebDevelopment/ServicesStackedCards';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import SideButtons from '../../components/SideButtons';
import WhatsAppButton from '../../components/WhatsAppButton';

function WebAppsPage() {
  return (
    <div>
      <Navigation />
      <WebApps />
      <ServicesStackedCards />
      <CTA
        title="The Right Tools Can Change Everything"
        text="Let's build an app that fits the workflow of your business."
      />
      <SideButtons />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default WebAppsPage;
