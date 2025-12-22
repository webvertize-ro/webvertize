import {
  faBorderAll,
  faBullhorn,
  faFilm,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSection1 = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Title = styled.h2``;

const Subtitle = styled.div`
  margin-top: -14px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const InnerTitle = styled.h4``;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li`
  border: 1px solid #f0f0f0;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ItemDescription = styled.div`
  padding-left: 1rem;
`;

const InnerUl = styled.ul`
  list-style-type: none;
  padding-left: 3rem;
`;

const InnerUlItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #182f3f;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.3s ease;
  border: 2px solid #182f3f;
  white-space: nowrap;

  &:hover {
    background-color: #203d52;
  }
`;

function Section1() {
  return (
    <StyledSection1 className="container">
      <Title>Content Creation for Ads</Title>
      <Subtitle className="fs-6">
        High-Quality Visuals Designed for Performance
      </Subtitle>
      <Description className="fs-5">
        Our ad creatives are built to capture attention, communicate value and
        support measurable results across modern advertising platforms.
      </Description>

      <InnerTitle>What We Create</InnerTitle>
      <StyledUl className="fs-5">
        <Item className="row">
          <div className="col-md-10">
            <ItemTitle>
              <FontAwesomeIcon icon={faBorderAll} />
              Split-Image Promotional Graphics
            </ItemTitle>
            <ItemDescription>
              Split-image promotional graphics are multi-section visuals
              designed to communicate several ideas in a single, cohesive frame.
            </ItemDescription>
            <InnerUl>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Highlighting multiple services in one frame
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Showing before and after results
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Presenting promotions or seasonal offers for products and
                services
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Increasing clarity, trust and brand awareness for your business
              </InnerUlItem>
            </InnerUl>
          </div>
          <div className="col-md-2">
            <StyledLink to="/portfolio">View Projects</StyledLink>
          </div>
        </Item>
        <Item className="row">
          <div className="col-md-10 mb-4">
            <ItemTitle>
              <FontAwesomeIcon icon={faFilm} />
              Promotional Reels (Short Videos)
            </ItemTitle>
            <ItemDescription>
              Reels are currently one of the most effective content formats for
              reaching new audiences. Short-form videos optimized for Facebook
              and Instagram include:
            </ItemDescription>
            <InnerUl>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Concise explanations of services
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Benefit-focused messaging
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Includes branding (logo, colors, tagline)
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Ends with a strong call-to-action
              </InnerUlItem>
            </InnerUl>
          </div>
          <div className="col-md-2">
            <StyledLink to="/portfolio">View Projects</StyledLink>
          </div>
        </Item>

        <Item className="row">
          <div className="col-md-10 mb-4">
            <ItemTitle>
              <FontAwesomeIcon icon={faBullhorn} />
              Ad-Ready Visuals for Google Ads
            </ItemTitle>
            <ItemDescription>
              Clean, high-quality image assets that follow Google's recommended
              formats to improve visibility and click-through rates.{' '}
            </ItemDescription>
            <InnerUl>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Text Assets
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Image Assets
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                Video Assets
              </InnerUlItem>
            </InnerUl>
          </div>
          <div className="col-md-2"></div>
        </Item>
      </StyledUl>
    </StyledSection1>
  );
}

export default Section1;
