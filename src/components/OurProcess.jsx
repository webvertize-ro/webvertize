import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  faBugSlash,
  faCode,
  faMagnifyingGlass,
  faRocket,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import bgImage from '../assets/our-process-bg.jpg';

const TabWrapper = styled.div`
  background-image: url(${bgImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 9;
  margin-bottom: 4rem;
  border-radius: 2rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 2rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.75;
  gap: 1rem;
  position: relative;
  z-index: 9;
  @media (max-width: 576px) {
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 14px;
  }
`;

const TabButtonIcon = styled.div`
  flex: 1;
`;

const TabButtonText = styled.div`
  flex: 3;
  display: flex;
  flex-direction: flex-start;
`;

const TabButton = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 1rem 0.3rem;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(to bottom, #456882 0%, #456882 60%, #456882 100%)'
      : 'linear-gradient(to bottom, #eaeaea 0%, #d4d4d4 60%, #c4c4c4 100%)'};
  color: ${({ active }) => (active ? '#fff' : '#444')};
  display: flex;
  /* justify-content: center; */
`;

const TabPanel = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 2.5rem;
  position: relative;
  z-index: 9;
  color: #fff;

  @media (max-width: 1200px) {
    padding: 0;
    gap: 1rem;
  }
`;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    font-size: 16px !important;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    font-size: 20px !important;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
`;

const TitleContainer = styled.div`
  position: relative;
  z-index: 9;
  color: #fff;
`;

const TabListTabPanel = styled.div`
  @media (max-width: 576px) {
    gap: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    gap: 1rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    gap: 1.5rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    gap: 2rem;
  }
`;

const StyledH2 = styled.h2``;

const Subtitle = styled.p``;

const tabs = [
  {
    label: 'Discovery',
    content:
      'We begin by getting to know your business — your goals, audience, competitors, and what makes your brand unique. Together, we define what success means for this project and translate it into clear requirements. The outcome of this phase is a focused digital strategy that guides every design and development decision.',
    icon: faMagnifyingGlass,
    iconLabel: fa1,
    color: '#fff',
  },
  {
    label: 'UX/UI Design',
    content:
      'Based on the strategy, we design the structure and visual identity of your website or application. This includes wireframes, layout, user flows and other design elements that reflect your brand and align with your business goals.',
    icon: faSitemap,
    iconLabel: fa2,
    color: '#fff',
  },
  {
    label: 'Development',
    content:
      'We bring the design to life by building a fast, responsive, and modern solution optimized for all devices. Whether it’s a presentational website or a full web application, we code using reliable technologies and integrate all required features as defined in the project scope.',
    icon: faCode,
    iconLabel: fa3,
    color: '#fff',
  },
  {
    label: 'Testing & Optimization',
    content:
      'Before launch, we carefully test everything - functionality, performance, accessibility and browser compatibility. We address issues, refine interactions, and optimize the experience so your product is ready for real users.',
    icon: faBugSlash,
    iconLabel: fa4,
    color: '#fff',
  },
  {
    label: 'Launch & Support',
    content:
      'Once everything meets expectations, we deploy the final product and provide post-launch support according to the agreed terms. We can assist with updates, optimizations, analytics, and improvements — ensuring your digital presence keeps growing.',
    icon: faRocket,
    iconLabel: fa5,
    color: '#fff',
  },
];

function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabWrapper className="container">
      <TabContainer className="container">
        <TitleContainer>
          <StyledH2>Our Process - How we build your digital presence</StyledH2>
          <Subtitle className="fs-5">
            A clear, step-by-step approach that turns ideas into reliable
            digital solutions.
          </Subtitle>
        </TitleContainer>
        <TabListTabPanel className="d-flex">
          <TabList>
            {tabs.map((tab, i) => (
              <TabButton
                key={i}
                active={activeIndex === i}
                onClick={() => setActiveIndex(i)}
              >
                <TabButtonIcon>
                  <FontAwesomeIcon icon={tab.iconLabel} />
                </TabButtonIcon>
                <TabButtonText className="flex-3">{tab.label}</TabButtonText>
              </TabButton>
            ))}
          </TabList>
          <TabPanel>
            <StyledFontAwesomeIcon
              icon={tabs[activeIndex].icon}
              color={tabs[activeIndex].color}
            />
            <StyledP className="fs-4">{tabs[activeIndex].content}</StyledP>
          </TabPanel>
        </TabListTabPanel>
      </TabContainer>
    </TabWrapper>
  );
}

export default OurProcess;
