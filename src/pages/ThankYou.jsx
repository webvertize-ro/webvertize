import styled from 'styled-components';
import Logo from '../components/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #1b3c53;
  padding: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
`;

const ThankYouContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ThankYouText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ThankYou() {
  // Check for the sessionStorage flag - if it doesn't exist, redirect to "/"
  const navigate = useNavigate();
  useEffect(() => {
    const flag = sessionStorage.getItem('formSubmitted');

    if (!flag) {
      navigate('/');
      return;
    }

    // if accessed correctly, remove the flag so refreshing the page doesn't show the content again
    sessionStorage.removeItem('formSubmitted');
  }, [navigate]);

  return (
    <ThankYouContainer>
      <Logo />
      <ThankYouText>
        <h3>{'thankYouPage.title'}</h3>
        <p className="fs-5">{'thankYouPage.paragraph'}</p>
      </ThankYouText>
      <StyledLink to="/">
        <div>
          <FontAwesomeIcon icon={faCircleLeft} />
        </div>
        <div>{'thankYouPage.buttonText'}</div>
      </StyledLink>
    </ThankYouContainer>
  );
}

export default ThankYou;
