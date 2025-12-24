import {
  faArrowRightToBracket,
  faArrowTrendUp,
  faBullseye,
  faChartLine,
  faChartPie,
  faClock,
  faComments,
  faDatabase,
  faEye,
  faHandshake,
  faImages,
  faMapLocationDot,
  faMessage,
  faTicket,
  faUserLock,
  faUsers,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import featuresImg from '../../assets/features_capabilities.jpg';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';
import Header from '../Header';

import CookiePopup from '../Cookies/CookiePopup';
import WebAppsIntro from './WebAppsIntro';
import WebAppsFeatures from './WebAppsFeatures';

const FeaturesImg = styled.img`
  border-radius: 20px;
`;

function WebApps() {
  return (
    <>
      <div className="container">{/* Value proposition */}</div>
    </>
  );
}

export default WebApps;
