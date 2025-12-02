import { useState, useEffect, useRef } from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  /* width: 250px; */
  position: relative;
  justify-content: center;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #000;
  cursor: default;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  &:hover {
    color: #fff;
  }
  &:hover {
    background-color: rgb(39, 55, 77);
  }
`;

const Options = styled.div`
  position: absolute;
  top: 0;
  background-color: rgb(39, 55, 77);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  &:hover {
    color: #fff;
  }
`;

const OptionsLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #fff;

  &:hover {
    background-color: rgb(157, 178, 191);
    color: #fff;
  }
`;

function Dropdown() {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(e.target)) {
          setDropdownToggled(false);
        }
      }
    }

    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  });

  const dropdownOptions = [
    {
      id: 1,
      label: 'Web Development',
      value: 'web-development',
      dest: '/web-development',
    },
    {
      id: 2,
      label: 'AI & Automation',
      value: 'ai-automation',
      dest: '/ai-automation',
    },
    {
      id: 3,
      label: 'Ad Campaigns',
      value: 'ad-campaigns',
      dest: '/ad-campaigns',
    },
    {
      id: 4,
      label: 'Content Creation',
      value: 'content-creation',
      dest: '/content-creation',
    },
  ];
  return (
    <StyledDropdown className="dropdown" ref={dropdownRef}>
      <StyledLink
        className="toggle"
        onClick={() => setDropdownToggled(!dropdownToggled)}
      >
        <div className="services-single">Services</div>
        <div>
          {dropdownToggled ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </StyledLink>
      <Options className={`options ${dropdownToggled ? 'visible' : ''}`}>
        {dropdownOptions.map((option, index) => {
          return (
            <OptionsLink
              to={option.dest}
              onClick={() => {
                setSelectedOption(option);
                setDropdownToggled(false);
              }}
              key={index}
            >
              {option.label}
            </OptionsLink>
          );
        })}
      </Options>
    </StyledDropdown>
  );
}

export default Dropdown;
