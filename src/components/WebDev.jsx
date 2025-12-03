import Card from './Card';
import styled from 'styled-components';
import bgWebsitesImage from '../assets/websites_image.jpg';
import bgWebAppsImage from '../assets/web_apps_image.jpg';

const StyledWebDev = styled.div`
  @media (max-width: 576px) {
    padding-top: 1rem;
    gap: 1rem;
    text-align: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding-top: 1.5rem;
    gap: 1rem;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding-top: 2rem;
    gap: 1rem;
    text-align: center;
  }

  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
`;

function WebDev() {
  return (
    <StyledWebDev>
      <h1>Web Development: Websites and Web Applications</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card
              title="Websites"
              subtitle="Presentational websites & essential online presence"
              text="Delivering fast, modern and responsive mobile-friendly presentation websites tailored to your brand. Additional features can be integrated based on your business needs - such as live chats, interactive maps, image galleries, contact forms, admin dashboards, login funtionality and more."
              link1="/portfolio"
              link2="/services"
              icon="websites-icon"
              bgImage={bgWebsitesImage}
              bgcolor="rgba(110, 162, 193, 0.2)"
              overlayOpacity={0.35}
              blur={5}
            />
          </div>
          <div className="col-md-6">
            <Card
              title="Web Applications"
              subtitle="Internal tools & custom business solutions"
              text="Custom internal applications designed for small and medium-sized businesses. Streamline your operations with tools built around your specific workflows—such as task management systems, ticketing platforms, live chat applications, inventory tracking, booking systems, and more."
              link1="/portfolio"
              link2="/services"
              icon="web-app-icon"
              bgImage={bgWebAppsImage}
              bgcolor="rgba(199, 204, 210, 0.5)"
              overlayOpacity={0.35}
              blur={5}
            />
          </div>
        </div>
      </div>
    </StyledWebDev>
  );
}

export default WebDev;
