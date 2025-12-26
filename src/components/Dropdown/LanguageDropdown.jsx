import styled from 'styled-components';
import roFlag from '../../assets/ro_flag.png';
import usaFlag from '../../assets/usa_flag.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleDot } from '@fortawesome/free-solid-svg-icons';

import i18n from '../../i18n';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const StyledSelect = styled.select`
  width: 4rem;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  color: black;
  position: absolute;
  top: 10;
  z-index: 100;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.25rem;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 0.8rem;
`;

const StyledButton = styled.button`
  border: none;
  background-color: lightgray;
  border-radius: 0.5rem;
  display: flex;
  position: relative;
`;

function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const currentLng = i18n.language;
  const lngDropdownRef = useRef(null);
  const { t } = useTranslation();

  function selectLanguage(lng) {
    i18n.changeLanguage(lng);
    setOpen(false);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        lngDropdownRef.current &&
        !lngDropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={lngDropdownRef} className="mt-2 mt-lg-0">
      <StyledButton onClick={() => setOpen((o) => !o)}>
        {currentLng === 'en' ? (
          <div className="d-flex gap-2 align-items-center justify-content-center">
            <img src={usaFlag} width="25" />
            <div>EN</div>
          </div>
        ) : (
          <div className="d-flex gap-2 align-items-center justify-content-center">
            <img src={roFlag} width="25" />
            <div>RO</div>
          </div>
        )}
      </StyledButton>
      {open && (
        <StyledUl>
          <StyledListItem onClick={() => selectLanguage('en')}>
            {t('languageDropdown.lng1')}
          </StyledListItem>
          <StyledListItem onClick={() => selectLanguage('ro')}>
            {t('languageDropdown.lng2')}
          </StyledListItem>
        </StyledUl>
      )}
    </div>
  );
}

export default LanguageDropdown;
