import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import FacebookIcon from './FacebookIcon';
import Dropdown from './Dropdown/Dropdown';

const StyledNav = styled.nav`
  height: 80px;
  padding: 0;
  /* padding: 1rem; */

  @media (max-width: 576px) {
    height: unset;
    padding: 1rem;
  }
`;

const StyledLinkLogo = styled(Link)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  max-width: 320px;
  height: 100%;
  width: 100%;

  &:hover {
    background-color: rgb(39, 55, 77);
    color: #fff;
  }

  @media (max-width: 992px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
`;

const StyledLi = styled.li`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const FacebookIconContainer = styled.div`
  padding-left: 1rem;
`;

function Navigation() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navRef = useRef(null);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNav = () => {
    setIsNavCollapsed(true);
  };

  // Effect to handle clicks outside the navigation
  useEffect(() => {
    function handleClickOutside(event) {
      // Only close the navbar on mobile (when it's expanded)
      if (!isNavCollapsed && window.innerWidth < 992) {
        // Check if the click is outside the navbar AND not on the toggler button
        if (
          navRef.current &&
          !navRef.current.contains(event.target) &&
          !event.target.closest('.navbar-toggler')
        ) {
          closeNav();
        }
      }
    }

    // Add event listener when component mounts or dependencies change
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavCollapsed]);

  return (
    <StyledNav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      ref={navRef}
    >
      <div className="container h-100">
        <StyledLinkLogo className="navbar-brand" to="/">
          <Logo />
        </StyledLinkLogo>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            isNavCollapsed ? 'collapse' : ''
          } navbar-collapse h-100`}
          id="navbarSupportedContent"
        >
          <StyledUl className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto h-100">
            <StyledLi className="nav-item">
              <StyledLink className="nav-link" to="/" onClick={closeNav}>
                Home
              </StyledLink>
            </StyledLi>
            {/* Services dropdown */}
            <StyledLi className="nav-item">
              <Dropdown closeNav={closeNav} />
            </StyledLi>

            <StyledLi className="nav-item">
              <StyledLink
                className="nav-link"
                to="/portfolio"
                onClick={closeNav}
              >
                Portfolio
              </StyledLink>
            </StyledLi>
            <StyledLi className="nav-item">
              <StyledLink className="nav-link" to="/contact" onClick={closeNav}>
                Contact
              </StyledLink>
            </StyledLi>
          </StyledUl>
          <FacebookIconContainer>
            <FacebookIcon color="dark" />
          </FacebookIconContainer>
        </div>
      </div>
    </StyledNav>
  );
}

export default Navigation;
