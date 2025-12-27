import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import websitesResultsImg from '../../assets/websites-results-img.jpg';

const StyledSection3 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
`;

const StyledImg = styled.img`
  border-radius: 1rem;
`;

function WebsitesResults() {
  const { t } = useTranslation();

  return (
    <StyledSection3 className="container">
      <h2 className="mb-3">{t('websites.websitesResults.title')}</h2>
      <div className="row">
        <div className="col-12 col-xl-6 mb-4 mb-xl-0">
          <StyledImg className="img-fluid" src={websitesResultsImg} alt="" />
        </div>
        <div className="col-12 col-xl-6">
          <p className="fs-5">
            {t('websites.websitesResults.textContent.text1')}
          </p>
          <p className="fs-5">
            {t('websites.websitesResults.textContent.text2')}
          </p>
          <p className="fs-5">
            {t('websites.websitesResults.textContent.text3')}
          </p>
        </div>
      </div>
    </StyledSection3>
  );
}

export default WebsitesResults;
