import styled from 'styled-components';
import Logo from '../components/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const StyledTooManyRequests = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const TooManyRequestsText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

function TooManyRequests() {
  // Check for the sessionStorage flag - if it doesn't exist, redirect to "/"
  const navigate = useNavigate();
  useEffect(() => {
    const flag = sessionStorage.getItem('tooManyRequests');

    if (!flag) {
      navigate('/');
      return;
    }

    // if accessed correctly, remove the flag so refreshing the page doesn't show the content again
    sessionStorage.removeItem('tooManyRequests');
  }, [navigate]);

  return (
    <StyledTooManyRequests>
      <Logo />
      <TooManyRequestsText>
        <h3>Too Many Requests!</h3>
        <p className="fs-5 w-75 text-center fs-4">
          For security reasons, we limit the number of form submissions within a
          certain time frame. Please try again tomorrow. Thank you!
        </p>
      </TooManyRequestsText>
      <StyledLink to="/">
        <div>
          <FontAwesomeIcon icon={faCircleLeft} />
        </div>
        <div>Back to the main page</div>
      </StyledLink>
    </StyledTooManyRequests>
  );
}

export default TooManyRequests;
