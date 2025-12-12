import styled from 'styled-components';
import HeaderAdsContentCreation from '../../assets/header_ads_content_creation.jpg';

const StyledHeader = styled.header`
  position: relative;
  padding: 4rem;
  background-image: url(${HeaderAdsContentCreation});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    border-radius: inherit;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  position: relative;
  z-index: 2;
  color: #fff;

  @media (max-width: 576px) {
    gap: 0.25rem;
  }
`;

const Title = styled.h1`
  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    font-size: 1rem !important;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <TextContent className="container">
        <Title>Advertising & Content Creation</Title>
        <StyledP className="fs-4">
          Modern businesses can't rely on good services alone — they need clear,
          professional advertising that reaches the right audience at the right
          moment. At Webvertize, we combine content creation, ad campaign
          strategy and ongoing optimization to ensure your business gets noticed
          where it matters most. Whether you need engaging visuals for your next
          promotion, a high-performing Google Ads campaign, or a series of Meta
          ads built to generate leads, we provide the creative and technical
          support to help your business grow.
        </StyledP>
      </TextContent>
    </StyledHeader>
  );
}

export default Header;
