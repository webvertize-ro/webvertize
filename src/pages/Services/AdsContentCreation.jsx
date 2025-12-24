import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section1 from '../../components/AdsContentCreation/Section1';
import Section2 from '../../components/AdsContentCreation/Section2';
import Section3 from '../../components/AdsContentCreation/Section3';
import Section4 from '../../components/AdsContentCreation/Section4';
import CTA from '../../components/CTA';
import bgImage from '../../assets/header_ads_content_creation.jpg';
import SideButtons from '../../components/SideButtons';
import WhatsAppButton from '../../components/WhatsAppButton';
import CookiePopup from '../../components/Cookies/CookiePopup';
import styled from 'styled-components';
import BackToTop from '../../components/BackToTop';
import { useTranslation } from 'react-i18next';

const StyledAdsContentCreation = styled.div`
  background-color: #2a566f;
  color: #fff;
`;

function AdsContentCreation() {
  const { t } = useTranslation();

  return (
    <StyledAdsContentCreation>
      <Navigation />
      <Header
        bgImage={bgImage}
        title="Advertising & Content Creation"
        text1="Modern businesses can't rely on good services alone — they need clear,
          professional advertising that reaches the right audience at the right
          moment. At Webvertize, we combine content creation, ad campaign
          strategy and ongoing optimization to ensure your business gets noticed
          where it matters most. Whether you need engaging visuals for your next
          promotion, a high-performing Google Ads campaign or a series of Meta
          ads built to generate leads, we provide the creative and technical
          support to help your business grow."
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CTA
        title="CTA.content-creation-ads.title"
        text="CTA.content-creation-ads.text"
      />
      <SideButtons />
      <BackToTop />
      <WhatsAppButton />
      <CookiePopup />
      <Footer />
    </StyledAdsContentCreation>
  );
}

export default AdsContentCreation;
