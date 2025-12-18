import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  padding: 4rem;
  background-image: url(${(props) => props.$bgImage});
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

function Header({ bgImage, title, text1, text2 }) {
  return (
    <StyledHeader $bgImage={bgImage}>
      <TextContent className="container">
        <Title>{title}</Title>
        <StyledP className="fs-4">
          {text2 ? <strong>{text1}</strong> : text1}
        </StyledP>
        {text2 ? <StyledP className="fs-4">{text2}</StyledP> : ''}
      </TextContent>
    </StyledHeader>
  );
}

export default Header;
