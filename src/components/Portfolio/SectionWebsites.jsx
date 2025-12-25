import imgWebsites1 from '../../assets/portfolio/websites/website1.jpg';
import imgWebsites2 from '../../assets/portfolio/websites/website2.jpg';
import imgWebApps1 from '../../assets/portfolio/web_apps/web_app1.jpg';
import imgWebApps2 from '../../assets/portfolio/web_apps/web_app2.jpg';
import imgContent1 from '../../assets/portfolio/content_creation/content1.png';
import imgContent2 from '../../assets/portfolio/content_creation/content2.png';
import imgContent3 from '../../assets/portfolio/content_creation/reel_thumbs_up.png';
import fotoAddaLogo from '../../assets/portfolio/websites/logos/foto_adda_logo.svg';
import CardFlip from './CardFlip';
import styled from 'styled-components';
import reelCerticorp from '../../assets/portfolio/content_creation/post4-reel.mp4';
import reelPoster from '../../assets/portfolio/content_creation/reel_poster.png';
import edionTransLogo from '../../assets/portfolio/logos/ediontrans_logo.svg';
import certicorpLogo from '../../assets/portfolio/logos/certicorp_logo_v4.svg';
import fixaziLogo from '../../assets/portfolio/logos/fixazi_logo2_nobg.png';
import senorExpertLogo from '../../assets/portfolio/logos/senorexpert_logo.svg';
import { useTranslation } from 'react-i18next';

const StyledSectionWebsites = styled.div`
  padding: 2.5rem 0 4rem;
`;

const StyledP = styled.p`
  margin-top: -12px;
`;

function SectionWebsites() {
  const websites = [
    {
      title: 'Edion Trans',
      companyName: 'Edion Trans',
      aboutCompany:
        'portfolio.websites.cards.card1.card1Modal.more.description',
      projectChallenges: {
        title: 'portfolio.websites.cards.card1.card1Modal.challenges.title',
        challenges: [
          'portfolio.websites.cards.card1.card1Modal.challenges.list.item1',
          'portfolio.websites.cards.card1.card1Modal.challenges.list.item2',
          'portfolio.websites.cards.card1.card1Modal.challenges.list.item3',
        ],
      },
      projectSolution:
        'portfolio.websites.cards.card1.card1Modal.solution.description',
      projectResults: {
        generalText:
          'portfolio.websites.cards.card1.card1Modal.results.description',
        listResults: [
          'portfolio.websites.cards.card1.card1Modal.results.list.item1',
          'portfolio.websites.cards.card1.card1Modal.results.list.item2',
          'portfolio.websites.cards.card1.card1Modal.results.list.item3',
          'portfolio.websites.cards.card1.card1Modal.results.list.item4',
        ],
      },
      projectKeyPoints: [
        'portfolio.websites.cards.card1.card1Modal.keyPoints.item1',
        'portfolio.websites.cards.card1.card1Modal.keyPoints.item2',
        'portfolio.websites.cards.card1.card1Modal.keyPoints.item3',
      ],
      shortDescription: 'portfolio.websites.cards.card1.card1Front.description',
      longDescription: 'portfolio.websites.cards.card1.card1Back.description',
      button1: { text: 'Live preview', link: 'https://ediontrans.ro/' },
      image: imgWebsites1,
      category: 'portfolio.websites.cards.card1.card1Front.badge',
      logo: edionTransLogo,
      categoryInner: 'websites',
    },
    {
      title: 'Studio Foto Adda',
      companyName: 'Studio Foto Adda',
      aboutCompany:
        'portfolio.websites.cards.card2.card2Modal.more.description',
      projectChallenges: {
        title: 'portfolio.websites.cards.card2.card2Modal.challenges.title',
        challenges: [
          'portfolio.websites.cards.card2.card2Modal.challenges.list.item1',
          'portfolio.websites.cards.card2.card2Modal.challenges.list.item2',
          'portfolio.websites.cards.card2.card2Modal.challenges.list.item3',
          'portfolio.websites.cards.card2.card2Modal.challenges.list.item4',
        ],
      },
      projectSolution:
        'portfolio.websites.cards.card2.card2Modal.solution.description',
      projectResults: {
        generalText:
          'portfolio.websites.cards.card2.card2Modal.results.description',
        listResults: [
          'portfolio.websites.cards.card2.card2Modal.results.list.item1',
          'portfolio.websites.cards.card2.card2Modal.results.list.item2',
          'portfolio.websites.cards.card2.card2Modal.results.list.item3',
          'portfolio.websites.cards.card2.card2Modal.results.list.item4',
        ],
      },
      projectKeyPoints: [
        'portfolio.websites.cards.card2.card2Modal.keyPoints.item1',
        'portfolio.websites.cards.card2.card2Modal.keyPoints.item2',
        'portfolio.websites.cards.card2.card2Modal.keyPoints.item3',
      ],
      shortDescription: 'portfolio.websites.cards.card2.card2Front.description',
      longDescription: 'portfolio.websites.cards.card2.card2Back.description',
      button1: { text: 'Live preview', link: 'https://studiofotoaddagl.ro/' },
      image: imgWebsites2,
      category: 'portfolio.websites.cards.card2.card2Front.badge',
      logo: fotoAddaLogo,
      categoryInner: 'websites',
    },
  ];

  const webApps = [
    // Senorexpert
    {
      title: 'Senorexpert',
      companyName: 'Senorexpert',
      aboutCompany:
        'portfolio.web-apps.cards.card1.card1Modal.more.description',
      projectChallenges: {
        title: 'portfolio.web-apps.cards.card1.card1Modal.challenges.title',
        challenges: [
          'portfolio.web-apps.cards.card1.card1Modal.challenges.list.item1',
          'portfolio.web-apps.cards.card1.card1Modal.challenges.list.item2',
          'portfolio.web-apps.cards.card1.card1Modal.challenges.list.item3',
          'portfolio.web-apps.cards.card1.card1Modal.challenges.list.item4',
          'portfolio.web-apps.cards.card1.card1Modal.challenges.list.item5',
          'portfolio.web-apps.cards.card1.card1Modal.challenges.list.item6',
        ],
      },
      projectSolution:
        'portfolio.web-apps.cards.card1.card1Modal.solution.description',
      projectResults: {
        generalText:
          'portfolio.web-apps.cards.card1.card1Modal.results.description',
        listResults: [
          'portfolio.web-apps.cards.card1.card1Modal.results.list.item1',
          'portfolio.web-apps.cards.card1.card1Modal.results.list.item2',
          'portfolio.web-apps.cards.card1.card1Modal.results.list.item3',
          'portfolio.web-apps.cards.card1.card1Modal.results.list.item4',
        ],
      },
      keyAppFunctionalities: [
        'Secure client authentication and account management',
        'Role-based access control for administrators and clients',
        'Client document upload functionality',
        'Admin dashboard for managing users, documents and content',
        'Database-driven website content (services, pricing, informational pages)',
        'Responsive design optimized for desktop and mobile use',
      ],
      projectKeyPoints: [
        'portfolio.web-apps.cards.card1.card1Modal.keyPoints.item1',
        'portfolio.web-apps.cards.card1.card1Modal.keyPoints.item2',
        'portfolio.web-apps.cards.card1.card1Modal.keyPoints.item3',
      ],
      shortDescription:
        'portfolio.web-apps.cards.card1.card1Front.shortDescription',
      longDescription:
        'portfolio.web-apps.cards.card1.card1Back.longDescription',
      button1: {
        text: 'Live Application',
        link: 'https://www.senorexpert.ro/',
      },
      image: imgWebApps1,
      category: 'portfolio.web-apps.cards.card1.card1Front.category',
      logo: senorExpertLogo,
      categoryInner: 'web-apps',
    },
    // FixAzi
    {
      title: 'FixAzi',
      companyName: 'FixAzi',
      aboutCompany:
        'portfolio.web-apps.cards.card2.card2Modal.more.description',
      projectChallenges: {
        title: 'portfolio.web-apps.cards.card2.card2Modal.challenges.title',
        challenges: [
          'portfolio.web-apps.cards.card2.card2Modal.challenges.list.item1',
          'portfolio.web-apps.cards.card2.card2Modal.challenges.list.item2',
          'portfolio.web-apps.cards.card2.card2Modal.challenges.list.item3',
          'portfolio.web-apps.cards.card2.card2Modal.challenges.list.item4',
          'portfolio.web-apps.cards.card2.card2Modal.challenges.list.item5',
          'portfolio.web-apps.cards.card2.card2Modal.challenges.list.item6',
          'portfolio.web-apps.cards.card2.card2Modal.challenges.list.item7',
          'portfolio.web-apps.cards.card2.card2Modal.challenges.list.item8',
        ],
      },
      projectSolution:
        'portfolio.web-apps.cards.card2.card2Modal.solution.description',
      projectResults: {
        generalText:
          'portfolio.web-apps.cards.card2.card2Modal.results.description',
        listResults: [
          'portfolio.web-apps.cards.card2.card2Modal.results.list.item1',
          'portfolio.web-apps.cards.card2.card2Modal.results.list.item2',
          'portfolio.web-apps.cards.card2.card2Modal.results.list.item3',
          'portfolio.web-apps.cards.card2.card2Modal.results.list.item4',
        ],
      },
      keyAppFunctionalities: [
        'Secure admin authentication and role-restricted dashboard',
        'Live chat system for real-time customer communication',
        'Admin-managed content for supported devices and pricing',
        'Conversation management interface for responding to customer messages',
        'Real-time browser notifications for new chat messages',
        'Responsive design optimized for desktop and mobile devices',
      ],
      projectKeyPoints: [
        'portfolio.web-apps.cards.card2.card2Modal.keyPoints.item1',
        'portfolio.web-apps.cards.card2.card2Modal.keyPoints.item2',
        'portfolio.web-apps.cards.card2.card2Modal.keyPoints.item3',
      ],
      shortDescription:
        'portfolio.web-apps.cards.card2.card2Front.shortDescription',
      longDescription:
        'portfolio.web-apps.cards.card2.card2Back.longDescription',
      button1: {
        text: 'Live Application',
        link: 'https://www.fixazi.com/',
      },
      image: imgWebApps2,
      category: 'portfolio.web-apps.cards.card2.card2Front.category',
      logo: fixaziLogo,
      categoryInner: 'web-apps',
    },
  ];

  const content = [
    // FixAzi poster
    {
      title: 'portfolio.content-creation.cards.card1.card1Front.title',
      companyName: 'FixAzi',

      aboutCompany:
        'portfolio.content-creation.cards.card1.card1Modal.more.description',

      projectChallenges: {
        title:
          'portfolio.content-creation.cards.card1.card1Modal.challenges.title',
        challenges: [
          'portfolio.content-creation.cards.card1.card1Modal.challenges.list.item1',
          'portfolio.content-creation.cards.card1.card1Modal.challenges.list.item2',
          'portfolio.content-creation.cards.card1.card1Modal.challenges.list.item3',
        ],
      },

      projectSolution:
        'portfolio.content-creation.cards.card1.card1Modal.solution.description',

      projectResults: {
        generalText:
          'portfolio.content-creation.cards.card1.card1Modal.results.description',
        listResults: [
          'portfolio.content-creation.cards.card1.card1Modal.results.list.item1',
          'portfolio.content-creation.cards.card1.card1Modal.results.list.item2',
          'portfolio.content-creation.cards.card1.card1Modal.results.list.item3',
        ],
      },

      projectKeyPoints: [
        'portfolio.content-creation.cards.card1.card1Modal.keyPoints.item1',
        'portfolio.content-creation.cards.card1.card1Modal.keyPoints.item2',
        'portfolio.content-creation.cards.card1.card1Modal.keyPoints.item3',
      ],

      shortDescription:
        'portfolio.content-creation.cards.card1.card1Front.shortDescription',

      longDescription:
        'portfolio.content-creation.cards.card1.card1Back.longDescription',

      button1: {
        text: 'View Full Poster',
        link: '../../assets/portfolio/content_creation/content1.png',
      },

      image: imgContent1,
      category: 'portfolio.content-creation.cards.card2.card2Front.category',
      categoryInner: 'ads',
      logo: fixaziLogo,
    },
    // CERTICORP poster
    {
      title: 'portfolio.content-creation.cards.card2.card2Front.title',
      companyName: 'CERTICORP',

      aboutCompany:
        'portfolio.content-creation.cards.card2.card2Modal.more.description',

      projectChallenges: {
        title: 'Project Challenges',
        challenges: [
          'portfolio.content-creation.cards.card2.card2Modal.challenges.list.item1',
          'portfolio.content-creation.cards.card2.card2Modal.challenges.list.item2',
          'portfolio.content-creation.cards.card2.card2Modal.challenges.list.item3',
        ],
      },

      projectSolution:
        'portfolio.content-creation.cards.card1.card1Modal.solution.description',

      projectResults: {
        generalText:
          'portfolio.content-creation.cards.card2.card2Modal.results.description',
        listResults: [
          'portfolio.content-creation.cards.card2.card2Modal.results.list.item1',
          'portfolio.content-creation.cards.card2.card2Modal.results.list.item2',
          'portfolio.content-creation.cards.card2.card2Modal.results.list.item3',
        ],
      },

      projectKeyPoints: [
        'portfolio.content-creation.cards.card2.card2Modal.keyPoints.item1',
        'portfolio.content-creation.cards.card2.card2Modal.keyPoints.item2',
        'portfolio.content-creation.cards.card2.card2Modal.keyPoints.item3',
      ],

      shortDescription:
        'portfolio.content-creation.cards.card2.card2Front.shortDescription',

      longDescription:
        'portfolio.content-creation.cards.card2.card2Back.longDescription',

      button1: {
        text: 'View Full Poster',
        link: '../../assets/portfolio/content_creation/content2.png',
      },

      image: imgContent2,
      category: 'portfolio.content-creation.cards.card2.card2Front.category',
      categoryInner: 'ads',
      logo: certicorpLogo,
    },
    // CERTICORP reel
    {
      title: 'portfolio.content-creation.cards.card3.card3Front.title',
      companyName: 'CERTICORP',

      aboutCompany:
        'portfolio.content-creation.cards.card3.card3Modal.more.description',

      projectChallenges: {
        title:
          'portfolio.content-creation.cards.card3.card3Modal.challenges.title',
        challenges: [
          'portfolio.content-creation.cards.card3.card3Modal.challenges.list.item1',
          'portfolio.content-creation.cards.card3.card3Modal.challenges.list.item2',
          'portfolio.content-creation.cards.card3.card3Modal.challenges.list.item3',
        ],
      },

      projectSolution:
        'portfolio.content-creation.cards.card3.card3Modal.solution.description',

      projectResults: {
        generalText:
          'portfolio.content-creation.cards.card3.card3Modal.results.description',
        listResults: [
          'portfolio.content-creation.cards.card3.card3Modal.results.list.item1',
          'portfolio.content-creation.cards.card3.card3Modal.results.list.item2',
          'portfolio.content-creation.cards.card3.card3Modal.results.list.item3',
        ],
      },

      projectKeyPoints: [
        'portfolio.content-creation.cards.card3.card3Modal.keyPoints.item1',
        'portfolio.content-creation.cards.card3.card3Modal.keyPoints.item2',
        'portfolio.content-creation.cards.card3.card3Modal.keyPoints.item3',
      ],

      shortDescription:
        'portfolio.content-creation.cards.card3.card3Front.shortDescription',

      longDescription:
        'portfolio.content-creation.cards.card3.card3Back.longDescription',

      button1: {
        text: 'Watch Full Video',
        link: '',
      },

      image: imgContent3,
      video: reelCerticorp,
      poster: reelPoster,
      category: 'Reel',
      categoryInner:
        'portfolio.content-creation.cards.card3.card3Front.category',
      logo: certicorpLogo,
    },
  ];

  const { t } = useTranslation();

  const renderCards = (projects) => (
    <div className="row g-4">
      {projects.map((project, index) => (
        <CardFlip
          image={project.image}
          title={project.title}
          shortDescription={project.shortDescription}
          longDescription={project.longDescription}
          category={project.category}
          project={project}
        />
      ))}
    </div>
  );

  return (
    <StyledSectionWebsites className="container">
      <section className="mb-4">
        <h2>{t('portfolio.websites.title')}</h2>
        <StyledP className="fs-5">{t('portfolio.websites.subtitle')}</StyledP>
        <div className="container">{renderCards(websites)}</div>
      </section>

      <section className="mb-4">
        <h2>{t('portfolio.web-apps.title')}</h2>
        <StyledP className="fs-5">{t('portfolio.web-apps.subtitle')}</StyledP>
        <div className="container">{renderCards(webApps)}</div>
      </section>

      <section className="mb-4">
        <h2>{t('portfolio.content-creation.title')}</h2>
        <StyledP className="fs-5">
          {t('portfolio.content-creation.subtitle')}
        </StyledP>
        <div className="container">{renderCards(content)}</div>
      </section>
    </StyledSectionWebsites>
  );
}

export default SectionWebsites;
