import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledOurMission = styled.div``;

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

function OurMission() {
  const { t } = useTranslation();

  return (
    <StyledOurMission className="container mb-4">
      <StyledH2>{t('homepage.ourMission.title')}</StyledH2>
      <Subtitle className="fs-5">{t('homepage.ourMission.subtitle')}</Subtitle>
      <Description>
        <TitleContainer></TitleContainer>
        <StyledP className="fs-4">
          {t('homepage.ourMission.textContent.text1')}
        </StyledP>
        <StyledP className="fs-4">
          {t('homepage.ourMission.textContent.text2')}
        </StyledP>
        <StyledP className="fs-4">
          {t('homepage.ourMission.textContent.text3')}
        </StyledP>
      </Description>
    </StyledOurMission>
  );
}

export default OurMission;
