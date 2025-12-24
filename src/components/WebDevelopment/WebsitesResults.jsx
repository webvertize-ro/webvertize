import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledSection3 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
`;

function WebsitesResults() {
  const { t } = useTranslation();

  return (
    <StyledSection3 className="container">
      <h2 className="mb-3">{t('websites.websitesResults.title')}</h2>
      <p className="fs-5">{t('websites.websitesResults.textContent.text1')}</p>
      <p className="fs-5">{t('websites.websitesResults.textContent.text2')}</p>
      <p className="fs-5">{t('websites.websitesResults.textContent.text3')}</p>
    </StyledSection3>
  );
}

export default WebsitesResults;
