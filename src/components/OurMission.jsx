import {
  faChartLine,
  faGears,
  faHandshake,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Pillars = styled.div``;

const StyledOurMission = styled.div`
  margin-bottom: 4rem;
`;

const StyledH2 = styled.h2``;

const Subtitle = styled.p``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const TitleContainer = styled.h2`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const Title = styled.div``;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    padding: 0.5rem;
  }
`;

const PillarsTitle = styled.h3`
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

const SubtitleCorePrinciples = styled.p``;

const PillarsRow = styled.div`
  display: flex;

  @media (max-width: 576px) {
    gap: 0.75rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  @media (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 0.25rem;
  }
`;

function OurMission() {
  return (
    <StyledOurMission>
      <StyledH2>Our Mission</StyledH2>
      <Subtitle className="fs-5">
        Digital solutions designed to grow your business
      </Subtitle>
      <Description>
        <TitleContainer></TitleContainer>
        <StyledP className="fs-4">
          At Webvertize, our mission is to help businesses build the strong
          online presence they deserve. We do this by delivering high-quality
          websites, web applications, engaging content and performance-focused
          ad campaigns that support real business growth.
        </StyledP>
        <StyledP className="fs-4">
          We believe that digital transformation should be an enjoyable journey,
          not a stresssful one. Through dedication, transparency and a
          collaborative approach, we work side-by-side with you to understand
          your needs and provide solutions that create a measurable impact.
        </StyledP>
        <StyledP className="fs-4">
          Our goal is not to just complete a project - it is to build a
          long-term partnership where success is shared, milestones are
          celebrated together and your business evolves confidently in the
          digital world.
        </StyledP>
      </Description>
      <Pillars>
        <PillarsTitle>Our Core Principles</PillarsTitle>
        <SubtitleCorePrinciples className="fs-5">
          How we approach every project and partnership
        </SubtitleCorePrinciples>
        <div className="container">
          <PillarsRow className="row d-flex align-items-stretch">
            <div className="col-sm-12 col-lg-3">
              <Card className="card h-100 text-white">
                <div className="card-body">
                  <h5 className="card-title d-flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={faChartLine} />
                    Growth-Focused Strategy
                  </h5>
                  <p className="card-text">
                    Our digital solutions are designed to support your business
                    goals - brand awareness, conversion rates, customer
                    relationships and more.
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-sm-12 col-lg-3">
              <Card className="card h-100 text-white">
                <div className="card-body">
                  <h5 className="card-title d-flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={faGears} />
                    Efficiency Through Technology
                  </h5>
                  <p className="card-text">
                    We streamline business processes through web applications,
                    automation and modern tools that help your business operate
                    more efficiently.
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-sm-12 col-lg-3">
              <Card className="card h-100 text-white">
                <div className="card-body">
                  <h5 className="card-title d-flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={faHandshake} />
                    Long-Term Partnerships
                  </h5>
                  <p className="card-text">
                    We believe great results come from long-term collaborations
                    - not one-time deliveries. We work side-by-side with your
                    business, adapting our solutions as your goals evolve.
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-sm-12 col-lg-3">
              <Card className="card h-100 text-white">
                <div className="card-body">
                  <h5 className="card-title d-flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={faRocket} />
                    Your Digital Presence, Elevated
                  </h5>
                  <p className="card-text">
                    From websites to ads and branded content, we help you build
                    a professional presence that reflects who you are and
                    attracts the right customers.
                  </p>
                </div>
              </Card>
            </div>
          </PillarsRow>
        </div>
      </Pillars>
    </StyledOurMission>
  );
}

export default OurMission;
