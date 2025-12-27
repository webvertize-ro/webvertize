import { useTranslation } from 'react-i18next';
import webAppsImg from '../../assets/web_app_image.jpg';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const SectionTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const WebsAppsImage = styled.img`
  max-width: 600px;
  border-radius: 20px;

  @media (max-width: 576px) {
    width: 300px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 325px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    width: 400px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 450px;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    width: 500px;
  }
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

function WebAppsIntro() {
  const { t } = useTranslation();

  return (
    <StyledSection className="container">
      <div className="row">
        <h2 className="mb-3">{t('webapps.webAppsIntro.title')}</h2>
        <div className="col-sm-12 col-xl-6 d-flex align-items-center justify-content-center">
          <WebsAppsImage src={webAppsImg} className="img-fluid" />
        </div>
        <div className="col-sm-12 col-xl-6">
          <SectionTextContent>
            <StyledP className="fs-5">
              {t('webapps.webAppsIntro.text.text1')}
            </StyledP>
            <StyledP className="fs-5">
              {t('webapps.webAppsIntro.text.text2')}
            </StyledP>
          </SectionTextContent>
        </div>
      </div>
    </StyledSection>
  );
}

export default WebAppsIntro;
