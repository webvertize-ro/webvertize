import Card from './Card';
import styled from 'styled-components';
import bgWebsitesImage from '../assets/websites_image.jpg';
import bgWebAppsImage from '../assets/web_apps_image.jpg';
import { useTranslation } from 'react-i18next';

const StyledWebDev = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 4rem;

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
`;

function WebDev() {
  const { t } = useTranslation();

  return (
    <StyledWebDev className="container">
      <h1>{t('homepage.webdev.title')}</h1>
      <p className="fs-4">{t('homepage.webdev.subtitle')}</p>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card
              title="homepage.webdev.websitesCard.title"
              subtitle="homepage.webdev.websitesCard.subtitle"
              text="homepage.webdev.websitesCard.text"
              link1="/portfolio"
              link2="/websites"
              icon="websites-icon"
              bgImage={bgWebsitesImage}
              bgcolor={'rgba(110, 162, 193, 0.7)'}
              overlayOpacity={0.35}
              blur={5}
              caseStudiesBtn="homepage.webdev.websitesCard.caseStudiesBtn"
              exploreServicesBtn="homepage.webdev.websitesCard.exploreServicesBtn"
            />
          </div>
          <div className="col-md-6">
            <Card
              title="homepage.webdev.webAppsCard.title"
              subtitle="homepage.webdev.webAppsCard.subtitle"
              text="homepage.webdev.webAppsCard.text"
              link1="/portfolio"
              link2="/web-apps"
              icon="web-app-icon"
              bgImage={bgWebAppsImage}
              bgcolor="rgba(199, 204, 210, 0.5)"
              overlayOpacity={0.35}
              blur={5}
              caseStudiesBtn="homepage.webdev.webAppsCard.caseStudiesBtn"
              exploreServicesBtn="homepage.webdev.webAppsCard.exploreServicesBtn"
            />
          </div>
        </div>
      </div>
    </StyledWebDev>
  );
}

export default WebDev;
