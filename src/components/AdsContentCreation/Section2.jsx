import styled from 'styled-components';
import googleAdsCampaigns from '../../assets/google_ads_campaigns_image.jpg';

const StyledSection2 = styled.div`
  padding-bottom: 4rem;
`;

const GoogleAdsCampaigns = styled.img`
  border-radius: 1.2rem;

  @media (max-width: 576px) {
    max-width: 350px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 500px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 650px;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2``;

const Subtitle = styled.div`
  margin-top: -12px;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  text-align: justify;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

function Section2() {
  return (
    <StyledSection2 className="container">
      <div className="row">
        <TitleContainer>
          <Title>Google Ads Campaigns</Title>
          <Subtitle>Search-Driven Advertising With Measurable Results</Subtitle>
        </TitleContainer>

        <Content>
          <ContentRow className="row">
            <div className="col-sm-12 col-xl-4 d-flex align-items-center justify-content-center">
              <GoogleAdsCampaigns
                src={googleAdsCampaigns}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-12 col-xl-8 d-flex align-items-center justify-content-center">
              <StyledP>
                Google Ads campaigns are most effective when they are built on
                clear goals, precise targeting and ongoing optimization. We work
                with you to design a campaign structure tailored to the
                objectives of your business, continuously refine performance and
                provide transparent reporting so you always understand how your
                investment is working for you.
              </StyledP>
            </div>
          </ContentRow>
        </Content>
      </div>
    </StyledSection2>
  );
}

export default Section2;
