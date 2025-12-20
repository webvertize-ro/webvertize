import ContentCreationCard from './ContentCreationCard';
import Card from './Card';
import styled from 'styled-components';
import contentCreationImg from '../assets/content_creation_image.jpg';
import googleAdsImage from '../assets/google_ads_image.jpg';
import facebookAdsImage from '../assets/facebook_ads_image.jpg';

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
  return (
    <StyledAds>
      <AdsTitle>
        Advertisment: Content Creation and Ad Campaigns Management
      </AdsTitle>
      <p className="fs-5">
        Creative content and carefully managed ad campaigns designed to attract,
        convert and scale.
      </p>
      <div className="container">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Content Creation */}
            <Card
              title="Content Creation"
              subtitle="Promotional images & Reels for ads"
              text="High-quaality  promotional content for Facebook and Google Ads, including professionally designed split-image posts and short video Reels that highlight your brand, services and calls to action."
              bgImage={contentCreationImg}
              link1="/portfolio"
              link2="/advertising-content-creation"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Google Ads Campaigns */}
            <Card
              title="Google Ads Campaigns"
              subtitle="Strategic creation and ongoing management of Google Ads campaigns tailored to your business goals"
              text="We collaborate with you to design a high-performing Google Ads campaign from the ground up - selecting the right objectives and ensuring consistent optimizations and monitoring. We monitor performance, implement improvements and deliver clear monthly reports so you always know how your campaign is progressing."
              bgImage={googleAdsImage}
              link3="/advertising-content-creation"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            {/* Facebook Ads Campaigns */}
            <Card
              title="Facebook Ads Campaigns"
              subtitle="Engaging campaigns tailored to your business goals"
              text="Creating and managing Facebook Ads campaigns, including promotional content, ad copy, and performance monitoring to reach your audience effectively."
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
