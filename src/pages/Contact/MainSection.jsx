import styled from 'styled-components';
import Form from '../../components/Form';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledMainSection = styled.div`
  padding: 4rem 6rem;
  @media (max-width: 576px) {
    padding: 1.5rem 2.25rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 1.75rem 2.625rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 2rem 3rem;
  }
`;

const Text = styled.div`
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  text-align: justify;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function MainSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleLoading(bool) {
    setIsLoading(bool);
  }

  async function handleValidSubmit(data) {
    handleLoading(true);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      handleLoading(false);
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
      sessionStorage.setItem('formSubmitted', 'true');
      navigate('/thank-you');
    } else if (res.status === 429) {
      handleLoading(false);
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
      sessionStorage.setItem('tooManyRequests', 'true');
      navigate('/too-many-requests');
    } else if (res.status === 400) {
      handleLoading(false);
      // toast.error('Captcha verification failed!');
    }
  }

  return (
    <StyledMainSection className="container">
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <Text>
            <h3>{t('contact.mainSection.title')}</h3>
            <p className="fs-5">{t('contact.mainSection.formText')}</p>
          </Text>

          <Form onValidSubmit={handleValidSubmit} isLoading={isLoading} />
        </div>
        {/* CTA */}
        <div className="col-md-6">
          <h3>{t('contact.mainSection.whatToExpect.title')}</h3>
          <StyledP className="fs-5">
            {t('contact.mainSection.whatToExpect.text')}
          </StyledP>
          <h4>{t('contact.mainSection.whatToExpect.title2')}</h4>
          <StyledUl>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa1} />
              {t('contact.mainSection.whatToExpect.list.item1')}
            </li>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa2} />
              {t('contact.mainSection.whatToExpect.list.item2')}
            </li>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa3} />
              {t('contact.mainSection.whatToExpect.list.item3')}
            </li>
          </StyledUl>
        </div>
      </div>
    </StyledMainSection>
  );
}

export default MainSection;
