import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCookiePopup = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: #1b3c53;
  color: #fff;
  padding: 1.5rem;
`;

const CookiePopupInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledButton = styled.button`
  border: none;
  /* background-color: transparent; */
  padding: 0.25rem 1rem;
  border-radius: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  background-color: #fff;
  padding: 0.25rem 1rem;
  border-radius: 10px;
`;

const StyledP = styled.p`
  margin: 0;
`;

function CookiePopup() {
  const [acceptedCookies, setAcceptedCookies] = useState(
    localStorage.getItem('WebvertizeAcceptedCookies') === 'true'
  );

  function handleAcceptedCookies() {
    setAcceptedCookies('true');
    localStorage.setItem('WebvertizeAcceptedCookies', 'true');
  }

  return (
    <>
      {!acceptedCookies && (
        <StyledCookiePopup>
          <CookiePopupInner className="container">
            <div className="row">
              {/* Message */}
              <div className="col-md-8 mb-3">
                <StyledP>
                  Webvertize doesn't use any cookies at the moment. Should we
                  imStyledPlement any, we will make sure to let you know. Please
                  check our cookies page regularily for updates and more
                  information about cookies.
                </StyledP>
              </div>
              {/* Buttons */}
              <div className="col-md-4 d-flex align-items-center">
                <ButtonsContainer>
                  <StyledButton onClick={() => handleAcceptedCookies()}>
                    Ok
                  </StyledButton>
                  <StyledLink to="/cookies">More about cookies</StyledLink>
                </ButtonsContainer>
              </div>
            </div>
          </CookiePopupInner>
        </StyledCookiePopup>
      )}
    </>
  );
}

export default CookiePopup;
