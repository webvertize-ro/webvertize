import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGear } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled.div`
  height: 100%;
  position: relative;
  padding: 5rem 1rem;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};

  @media (max-width: 576px) {
    padding: 0;
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) and (max-width: 769px) {
    padding: 0;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 0.5rem;
  }

  /* Hover background */
  @media (min-width: 768px) {
    &:hover {
      color: #fff;
      background-image: url(${(props) => props.bgImage || ''});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        z-index: 1;
        border-radius: inherit;
        transition: all 0.3s ease;
      }
    }
  }
`;

const CardTitle = styled.h4`
  /* @media (min-width: 992px) and (max-width: 1200px) {
    text-align: left;
  } */
`;

const CardBody = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  flex-grow: 1 !important;
`;

const StyledP = styled.p`
  text-align: justify;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: rgb(35, 76, 106);
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.3s ease;
  margin-right: 0.5rem;

  &:hover {
    background-color: rgb(60, 110, 150);
  }
`;

function Card({
  title,
  subtitle,
  text,
  link1,
  link2,
  link3,
  icon,
  bgImage,
  overlayOpacity = 0.5,
  blur = 0,
  bgcolor,
}) {
  const getIcon = () => {
    if (icon === 'websites-icon') return faGlobe;
    if (icon === 'web-app-icon') return faGear;
    return null;
  };

  return (
    <StyledCard
      className="card"
      bgcolor={bgcolor}
      bgImage={bgImage}
      overlayOpacity={overlayOpacity}
      blur={blur}
    >
      <CardBody className="card-body">
        {title && (
          <h2 className="card-title d-flex align-items-center gap-2">
            {getIcon() && <FontAwesomeIcon icon={getIcon()} />}
            {title}
          </h2>
        )}

        {subtitle && (
          <CardTitle className="text-start card-subtitle mb-2">
            {subtitle}
          </CardTitle>
        )}
        {text && <StyledP>{text}</StyledP>}

        {(link1 || link2 || link3) && (
          <div className="d-flex">
            {link1 && <StyledLink to={link1}>View Case Studies</StyledLink>}
            {link2 && <StyledLink to={link2}>Explore Services</StyledLink>}
            {link3 && (
              <StyledLink to={link2}>Read more about campaign types</StyledLink>
            )}
          </div>
        )}
      </CardBody>
    </StyledCard>
  );
}

export default Card;
