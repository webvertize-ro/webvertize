import { useEffect } from 'react';
import styled from 'styled-components';
import discoveryImg from '../../assets/discovery.jpg';
import uiUxImg from '../../assets/ui_ux_design.jpg';
import developmentImg from '../../assets/development.jpg';
import testingImg from '../../assets/testing_optimization.jpg';
import launchImg from '../../assets/launch_support.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faBoxOpen,
  faToolbox,
  faUser,
  faClock,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;

  @media (max-width: 1200px) {
    align-items: center;
    margin-bottom: 1.5rem;
    padding-top: 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: left;
  padding: 0;
  @media (max-width: 576px) {
    text-align: center;
    padding: 0 1rem;
  }
`;

const Subtitle = styled.p``;

const CardsList = styled.ul`
  list-style: none;
  width: 75%;
  margin: 0;
  margin-bottom: 200px;
  padding: 0;
`;

const Card = styled.li`
  position: sticky;
  top: 6rem;
  transform-origin: center top;
  width: 100%;

  border-radius: 1.5rem;
  padding: 2rem;
  margin: 0 0 4rem 0;
  overflow: hidden;
  color: white;

  /* Background image */
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Dark overlay */

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 1;
  }

  /* Text on top */
  * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 576px) {
    height: 200px;
    margin: 0;
    padding: 1rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    height: 300px;
    margin: 0;
    padding: 1.25rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    height: 325px;
    margin: 0;
    padding: 1.5rem;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    height: 450px;
    margin: 0;
    padding: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;

  @media (max-width: 576px) {
    font-size: 1rem !important;
  }
`;

const StyledLiInner = styled.div`
  @media (max-width: 576px) {
    font-size: 0.5rem !important;
  }
`;
const StyledUl = styled.ul`
  list-style: none;

  @media (max-width: 992px) {
    display: none;
  }
`;

const StyledLi = styled.li`
  display: flex;
  /* align-items: center; */
  gap: 0.5rem;
`;

export default function ServicesStackedCards() {
  const icons = [faRocket, faBoxOpen, faToolbox, faUser, faClock, faStar];
  const { t } = useTranslation();
  const steps = [
    {
      title: 'Discovery',
      titleKey: 'servicesStackedCards.cards.card1.title',
      objective: {
        title: 'Objective',
        titleKey: 'servicesStackedCards.objective',
        content: 'servicesStackedCards.cards.card1.objective',
        contentKey: 'servicesStackedCards.cards.card1.objective',
      },
      list: [
        {
          itemTitle: 'Start',
          itemTitleKey: 'servicesStackedCards.cards.card1.list.item1.itemTitle',
          itemText:
            'We start by learning everything about your business - your objectives, target customers, unique value propositions and competitors.',
          itemTextKey: 'servicesStackedCards.cards.card1.list.item1.itemText',
        },
        {
          itemTitle: 'Deliverables',
          itemTitleKey: 'servicesStackedCards.cards.card1.list.item2.itemTitle',
          itemText:
            'Clear project brief, success criteria, digital strategy document.',
          itemTextKey: 'servicesStackedCards.cards.card1.list.item2.itemText',
        },
        {
          itemTitle: 'Tools & Methods',
          itemTitleKey: 'servicesStackedCards.cards.card1.list.item3.itemTitle',
          itemText:
            'Questions, strategy workshops, competitor research and analytics review.',
          itemTextKey: 'servicesStackedCards.cards.card1.list.item3.itemText',
        },
        {
          itemTitle: 'Client Role',
          itemTitleKey: 'servicesStackedCards.cards.card1.list.item4.itemTitle',
          itemText:
            'Provide business insights, answer questions, share branding materials or information about past campaigns.',
          itemTextKey: 'servicesStackedCards.cards.card1.list.item4.itemText',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemTitleKey: 'servicesStackedCards.cards.card1.list.item5.itemTitle',
          itemText: 'Typically 1-2 weeks, depending on project complexity.',
          itemTextKey: 'servicesStackedCards.cards.card1.list.item5.itemText',
        },
        {
          itemTitle: 'Value',
          itemTitleKey: 'servicesStackedCards.cards.card1.list.item6.itemTitle',
          itemText:
            'Ensures that all the decisions in design and development are aligned with your business goals, saving time and preventing misalignment later.',
          itemTextKey: 'servicesStackedCards.cards.card1.list.item6.itemText',
        },
      ],
      image: discoveryImg,
    },
    {
      title: 'UX/UI Design',
      titleKey: 'servicesStackedCards.cards.card2.title',
      objective: {
        title: 'Objective',
        titleKey: 'servicesStackedCards.cards.card2.title',
        content:
          'Define the structure and visual identity of your website or app to ensure usability and brand alignment.',
        contentKey: 'servicesStackedCards.cards.card2.objective',
      },
      list: [
        {
          itemTitle: 'Start',
          itemTitleKey: 'servicesStackedCards.cards.card2.list.item1.itemTitle',
          itemText:
            "Based on the Discovery phase, we create wireframes, user flows and visual mockups that reflect your brand and your audience's needs.",
          itemTextKey: 'servicesStackedCards.cards.card2.list.item1.itemText',
        },
        {
          itemTitle: 'Deliverables',
          itemTitleKey: 'servicesStackedCards.cards.card2.list.item2.itemTitle',
          itemText:
            'Wireframes, interactive prototypes, style guide, design assets.',
          itemTextKey: 'servicesStackedCards.cards.card2.list.item2.itemText',
        },
        {
          itemTitle: 'Tools & Methods',
          itemTitleKey: 'servicesStackedCards.cards.card2.list.item3.itemTitle',
          itemText: 'Figma, Adobe XD and design workshops.',
          itemTextKey: 'servicesStackedCards.cards.card2.list.item3.itemText',
        },
        {
          itemTitle: 'Client Role',
          itemTitleKey: 'servicesStackedCards.cards.card2.list.item4.itemTitle',
          itemText:
            'Review and approve wireframes and mockups and provide feedback on visual preferences.',
          itemTextKey: 'servicesStackedCards.cards.card2.list.item4.itemText',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemTitleKey: 'servicesStackedCards.cards.card2.list.item5.itemTitle',
          itemText:
            '2-3 weeks for a standard website; more for complex web applications.',
          itemTextKey: 'servicesStackedCards.cards.card2.list.item5.itemText',
        },
        {
          itemTitle: 'Value',
          itemTitleKey: 'servicesStackedCards.cards.card2.list.item6.itemTitle',
          itemText:
            'Helps you visualize your product early, reduces risk of costly changes during development and ensures usability and accessibility.',
          itemTextKey: 'servicesStackedCards.cards.card2.list.item6.itemText',
        },
      ],
      image: uiUxImg,
    },
    {
      title: 'servicesStackedCards.cards.card3.title',
      titleKey: 'servicesStackedCards.cards.card3.title',
      objective: {
        titleKey: 'servicesStackedCards.cards.card3.title',
        title: 'Objective',
        content:
          'Turn designs into a fully functional, responsive, and high-performance digital product.',
        contentKey: 'servicesStackedCards.cards.card3.objective',
      },
      list: [
        {
          itemTitle: 'Start',
          itemTitleKey: 'servicesStackedCards.cards.card3.list.item1.itemTitle',
          itemText:
            'We translate designs into clean, optimized code, integrating required functionality, animations and third-party tools.',
          itemTextKey: 'servicesStackedCards.cards.card3.list.item1.itemText',
        },
        {
          itemTitle: 'Deliverables',
          itemTitleKey: 'servicesStackedCards.cards.card3.list.item2.itemTitle',
          itemText:
            'Fully functional website or web app, including CMS setup if applicable, initial content upload.',
          itemTextKey: 'servicesStackedCards.cards.card3.list.item2.itemText',
        },
        {
          itemTitle: 'Tools & Methods',
          itemTitleKey: 'servicesStackedCards.cards.card3.list.item3.itemTitle',
          itemText:
            'HTML, CSS, JavaScript (React, Vue, etc.), Bootstrap, APIs, version control (Git).',
          itemTextKey: 'servicesStackedCards.cards.card3.list.item3.itemText',
        },
        {
          itemTitle: 'Client Role',
          itemTitleKey: 'servicesStackedCards.cards.card3.list.item4.itemTitle',
          itemText:
            'Provide final content and approve major development milestones.',
          itemTextKey: 'servicesStackedCards.cards.card3.list.item4.itemText',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemTitleKey: 'servicesStackedCards.cards.card3.list.item5.itemTitle',
          itemText:
            'Usually 3–6 weeks depending on complexity. We provide regular progress updates along the way.',
          itemTextKey: 'servicesStackedCards.cards.card3.list.item5.itemText',
        },
        {
          itemTitle: 'Value',
          itemTitleKey: 'servicesStackedCards.cards.card3.list.item6.itemTitle',
          itemText:
            'You get a modern, scalable and performant solution built with best practices.',
          itemTextKey: 'servicesStackedCards.cards.card3.list.item6.itemText',
        },
      ],
      image: developmentImg,
    },
    {
      title: 'Testing & Optimization',
      titleKey: 'servicesStackedCards.cards.card4.title',
      objective: {
        titleKey: 'servicesStackedCards.cards.card4.title',
        title: 'Objective',
        content:
          'Ensure quality, performance and compatibility across devices and browsers.',
        contentKey: 'servicesStackedCards.cards.card4.objective',
      },
      list: [
        {
          itemTitle: 'Start',
          itemTitleKey: 'servicesStackedCards.cards.card4.list.item1.itemTitle',
          itemText:
            'We conduct extensive testing, including functional testing, responsiveness, accessibility, speed optimization and SEO checks.',
          itemTextKey: 'servicesStackedCards.cards.card4.list.item1.itemText',
        },
        {
          itemTitle: 'Deliverables',
          itemTitleKey: 'servicesStackedCards.cards.card4.list.item2.itemTitle',
          itemText: 'Test reports, bug fixes, optimization recommendations.',
          itemTextKey: 'servicesStackedCards.cards.card4.list.item2.itemText',
        },
        {
          itemTitle: 'Tools & Methods',
          itemTitleKey: 'servicesStackedCards.cards.card4.list.item3.itemTitle',
          itemText:
            'Browser testing (Chrome, Safari, Firefox), Lighthouse audits, automated and manual QA tests.',
          itemTextKey: 'servicesStackedCards.cards.card4.list.item3.itemText',
        },
        {
          itemTitle: 'Client Role',
          itemTitleKey: 'servicesStackedCards.cards.card4.list.item4.itemTitle',
          itemText:
            'Participate in User Acceptance Testing (UAT) and provide feedback on final functionality.',
          itemTextKey: 'servicesStackedCards.cards.card4.list.item4.itemText',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemTitleKey: 'servicesStackedCards.cards.card4.list.item5.itemTitle',
          itemText: '1–2 weeks; may vary for complex applications.',
          itemTextKey: 'servicesStackedCards.cards.card4.list.item5.itemText',
        },
        {
          itemTitle: 'Value',
          itemTitleKey: 'servicesStackedCards.cards.card4.list.item6.itemTitle',
          itemText:
            'Guarantees a smooth, reliable and user-friendly experience for the users of the digital product.',
          itemTextKey: 'servicesStackedCards.cards.card4.list.item6.itemText',
        },
      ],
      image: testingImg,
    },
    {
      title: 'Launch & Support',
      titleKey: 'servicesStackedCards.cards.card5.title',
      objective: {
        title: 'Objective',
        content:
          'Deploy your product live and provide ongoing support to ensure continued success.',
        contentKey: 'servicesStackedCards.cards.card5.objective',
      },
      list: [
        {
          itemTitle: 'Start',
          itemTitleKey: 'servicesStackedCards.cards.card5.list.item1.itemTitle',
          itemText:
            'We deploy the product to your hosting environment, configure analytics and monitor performance in the initial weeks.',
          itemTextKey: 'servicesStackedCards.cards.card5.list.item1.itemText',
        },
        {
          itemTitle: 'Deliverables',
          itemTitleKey: 'servicesStackedCards.cards.card5.list.item2.itemTitle',
          itemText:
            'Live website/web app, training for CMS (if applicable), documentation, post-launch support period.',
          itemTextKey: 'servicesStackedCards.cards.card5.list.item2.itemText',
        },
        {
          itemTitle: 'Tools & Methods',
          itemTitleKey: 'servicesStackedCards.cards.card5.list.item3.itemTitle',
          itemText:
            'Hosting setup, monitoring tools, analytics integration, optional maintenance agreements.',
          itemTextKey: 'servicesStackedCards.cards.card5.list.item3.itemText',
        },
        {
          itemTitle: 'Client Role',
          itemTitleKey: 'servicesStackedCards.cards.card5.list.item4.itemTitle',
          itemText:
            'Approve final launch, communicate any post-launch updates needed.',
          itemTextKey: 'servicesStackedCards.cards.card5.list.item4.itemText',
        },
        {
          itemTitle: 'Timeline Expectation',
          itemTitleKey: 'servicesStackedCards.cards.card5.list.item5.itemTitle',
          itemText:
            'Launch typically 1–2 days after testing; support period as agreed.',
          itemTextKey: 'servicesStackedCards.cards.card5.list.item5.itemText',
        },
        {
          itemTitle: 'Value',
          itemTitleKey: 'servicesStackedCards.cards.card5.list.item6.itemTitle',
          itemText:
            'You can confidently go live knowing everything works, and you have a partner to help with improvements and updates.',
          itemTextKey: 'servicesStackedCards.cards.card5.list.item6.itemText',
        },
      ],
      image: launchImg,
    },
  ];

  useEffect(() => {
    const container = document.querySelector('.js-stack-cards');
    if (!container) return;

    const items = container.getElementsByClassName('js-stack-cards__item');
    let marginY = 64;
    const cardHeight = items[0].offsetHeight;
    const windowHeight = window.innerHeight;
    let scrolling = false;

    function animate() {
      const top = container.getBoundingClientRect().top;
      for (let i = 0; i < items.length; i++) {
        const scrollOffset = cardHeight + marginY * i + marginY / 2 - top;
        if (scrollOffset > 0) {
          const scaling =
            (this.cardHeight - scrolling * 0.05) / this.cardHeight;
          items[i].style.transform = `translateY(${
            marginY * i
          }px) scale(${scaling})`;
        } else {
          items[i].style.transform = `translateY(${marginY * i}px)`;
        }
      }
      scrolling = false;
    }

    function scrollHandler() {
      if (scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(animate);
    }

    // initial position
    for (let i = 0; i < items.length; i++) {
      items[i].style.transform = `translateY(${marginY * i}px)`;
    }

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <Section className="container">
      <SectionTitle>{t('servicesStackedCards.title')}</SectionTitle>
      <Subtitle className="fs-5">{t('servicesStackedCards.subtitle')}</Subtitle>
      <CardsList className="js-stack-cards">
        {steps.map((step, i) => (
          <Card key={i} bg={step.image} className="js-stack-cards__item">
            <Title>{t(step.titleKey)}</Title>
            <Text className="fs-5">
              <strong>{t('servicesStackedCards.objective')}</strong>:{' '}
              {t(step.objective.contentKey)}
            </Text>
            <StyledUl>
              {step.list?.map((item, i) => (
                <StyledLi>
                  <div>
                    <FontAwesomeIcon icon={icons[i]} />
                  </div>
                  <StyledLiInner className="fs-5">
                    <strong className="fs-5">{t(item.itemTitleKey)}</strong>:{' '}
                    {t(item.itemTextKey)}
                  </StyledLiInner>
                </StyledLi>
              ))}
            </StyledUl>
          </Card>
        ))}
      </CardsList>
    </Section>
  );
}
