import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ModalForm from './ModalForm';
import Form from './Form';
import ScheduleACallButton from './ScheduleACallButton';
import { useTranslation } from 'react-i18next';

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

const StyledButton = styled.button`
  background-color: #344955;
  border: none;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  @media (min-width: 576px) {
    &:hover {
      background-color: #455e6b;
    }
  }
`;

function Header({ bgImage, title, text1, text2 }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const { t } = useTranslation();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // send to Vercel API route
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      // Navigate to the thank-you page
      // 1. Removing Bootstrap's modal-backdrop
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
      setShowForm(false);
      // 2. Setting a flag in the SessionStorage
      sessionStorage.setItem('formSubmitted', 'true');
      // 3. Navigating to the thank-you page
      navigate('/thank-you');
    } else if (res.status === 429) {
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
      setShowForm(false);
      // setting a flag in sessionStorage
      sessionStorage.setItem('tooManyRequests', 'true');
      navigate('/too-many-requests');
      return;
    }
  }

  return (
    <>
      <StyledHeader $bgImage={bgImage}>
        <TextContent className="container">
          <Title>{t(title)}</Title>
          <StyledP className="fs-4 text-center">
            {t(text2) ? <strong>{t(text1)}</strong> : t(text1)} {t(text2)}
          </StyledP>
          {title !== 'Webvertize Cookie Policy' && (
            <StyledButton onClick={() => setShowForm(true)}>
              {t('header.homepage.textBtn')}
            </StyledButton>
          )}
        </TextContent>
      </StyledHeader>

      <ModalForm
        show={showForm}
        title="Schedule a Call"
        onClose={() => setShowForm(false)}
      >
        <Form onSubmit={handleSubmit}></Form>
      </ModalForm>
    </>
  );
}

export default Header;
