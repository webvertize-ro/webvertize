import ContentCreationCard from './ContentCreationCard';
import Card from './Card';
import styled from 'styled-components';
import contentCreationImg from '../assets/content_creation_image.jpg';
import googleAdsImage from '../assets/google_ads_image.jpg';
import facebookAdsImage from '../assets/facebook_ads_image.jpg';
import { useTranslation } from 'react-i18next';

const StyledAds = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media (max-width: 576px) {
    margin-bottom: 2rem;
    text-align: center;
    gap: 1rem;
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

const AdsTitle = styled.h2`
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

function Ads() {
  const { t } = useTranslation();

  return (
    <StyledAds className="container">
      <AdsTitle>{t('homepage.ads.title')}</AdsTitle>
      <p className="fs-5">{t('homepage.ads.subtitle')}</p>
      <div className="container">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Content Creation */}
            <Card
              title="homepage.ads.contentCreationCard.title"
              subtitle="homepage.ads.contentCreationCard.subtitle"
              text="homepage.ads.contentCreationCard.text"
              bgImage={contentCreationImg}
              link1="/portfolio"
              link2="/advertising-content-creation"
              caseStudiesBtn="homepage.ads.contentCreationCard.caseStudiesBtn"
              exploreServicesBtn="homepage.ads.contentCreationCard.exploreServicesBtn"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Google Ads Campaigns */}
            <Card
              title="homepage.ads.googleAdsCard.title"
              subtitle="homepage.ads.googleAdsCard.subtitle"
              text="homepage.ads.googleAdsCard.text"
              readMoreBtn="homepage.ads.googleAdsCard.readMoreBtn"
              bgImage={googleAdsImage}
              link3="/advertising-content-creation"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Facebook Ads Campaigns */}
            <Card
              title="homepage.ads.facebookAdsCard.title"
              subtitle="homepage.ads.facebookAdsCard.subtitle"
              text="homepage.ads.facebookAdsCard.text"
              readMoreBtn="homepage.ads.googleAdsCard.readMoreBtn"
              bgImage={facebookAdsImage}
              link3="/advertising-content-creation"
            />
          </div>
        </div>
      </div>
    </StyledAds>
  );
}

export default Ads;
