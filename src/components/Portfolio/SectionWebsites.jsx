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

const StyledSectionWebsites = styled.div`
  padding: 2.5rem 0 4rem;
`;

function SectionWebsites() {
  const websites = [
    {
      title: 'Edion Trans',
      companyName: 'Edion Trans',
      aboutCompany:
        'Edion Trans is a regional transportation company providing both domestic and international transport services on predefined routes. In addition to passenger transport, the company also offers international parcel delivery services.',
      projectChallenges: {
        title: 'Project Challenges',
        challenges: [
          'Limited existing content and digital assets',
          'Defining the most relevant features for users and the business',
          'Creating a clean, professional design that clearly presents services and routes',
        ],
      },
      projectSolution:
        'We followed a structured, step-by-step process to build the website from the ground up. First, we gathered and organized all essential information from Edion Trans, including business details, contact data, service workflows, visual assets and Google Business Profile information. Based on this, we implemented key functionalities such as interactive route maps and validated contact forms with email delivery. Finally, we designed a modern and intuitive interface to present the content clearly and consistently.',
      projectResults: {
        generalText:
          'The result is a fast, responsive, and user-friendly website that significantly improves Edion Trans’ online presence and supports their day-to-day operations:',
        listResults: [
          'Enables visitors to submit inquiries through validated forms, with collected data delivered directly via email',
          'Visually presents transportation routes using interactive maps with location markers',
          'Allows customers to leave Google Reviews directly from the website',
          'Provides quick access to contact details and essential information through a dedicated contact page and a structured FAQ section',
        ],
      },
      projectKeyPoints: [
        'First impressions matter. A clear and professional website builds trust and credibility, helping potential customers feel confident in choosing Edion Trans.',
        'Functionality-first approach. Every project starts by identifying real business needs before design and content decisions are made, ensuring practical and effective solutions.',
        'Strong technical foundation. The website is built to scale easily, supporting future needs such as Google Ads landing pages, conversion tracking, and additional features.',
      ],
      shortDescription:
        'Presentational website for a regional transportation company',
      longDescription:
        'A modern, presentational website featuring interactive route maps, validated contact forms with email delivery, Google Review integration, and a comprehensive FAQ section.',
      button1: { text: 'Live preview', link: 'https://ediontrans.ro/' },
      image: imgWebsites1,
      category: 'websites',
      logo: edionTransLogo,
    },
    {
      title: 'Studio Foto Adda',
      companyName: 'Studio Foto Adda',
      aboutCompany:
        'Studio Foto Adda is a local photography studio offering both in-studio photography services and on-location coverage for events, portraits, and special occasions.',
      projectChallenges: {
        title: 'Project Challenges',
        challenges: [
          'Lack of structured content for presenting services and portfolio',
          'Optimizing image-heavy pages without compromising performance',
          'Implementing an effective lazy-loading strategy for large image galleries',
          'Choosing a clean and elegant design to highlight visual content',
        ],
      },
      projectSolution:
        'We approached the project with performance and visual clarity as top priorities. First, we implemented lazy-loading for images using the Intersection Observer API to ensure fast initial load times. Next, we structured and created the website content to clearly present services and photographic work. Finally, we designed a clean and minimalist interface that allows the imagery to remain the main focus.',
      projectResults: {
        generalText:
          'The result is a modern, fast, and mobile-friendly website that strengthens Studio Foto Adda’s online presence and showcases their work effectively:',
        listResults: [
          'High-performance image galleries with lazy-loaded photos',
          'Clear presentation of services and photographic portfolio',
          'Easy access to contact information and inquiry forms',
          'Improved user experience across desktop and mobile devices',
        ],
      },
      projectKeyPoints: [
        'Visual storytelling matters. For creative businesses, a website must highlight work while staying fast and responsive.',
        'Performance-first approach. Optimizing image loading significantly improves user experience and perceived quality.',
        'Timeless design. A simple and elegant layout keeps the focus on the content and ensures long-term relevance.',
      ],
      shortDescription: 'Presentational website for a local photography studio',
      longDescription:
        'A performance-optimized presentational website featuring lazy-loaded image galleries, clear service presentation, and a validated contact form that sends inquiries directly via email.',
      button1: { text: 'Live preview', link: 'https://studiofotoaddagl.ro/' },
      image: imgWebsites2,
      category: 'websites',
      logo: fotoAddaLogo,
    },
  ];

  const webApps = [
    {
      title: 'Senorexpert',
      companyName: 'Senorexpert',
      aboutCompany:
        'Senorexpert is a local accounting firm in Galați providing comprehensive financial and accounting services for small and medium-sized businesses. With over 20 years of professional experience, the firm offers general accounting, tax reporting and compliance, payroll and HR services, financial consulting, and company formation support.',
      projectChallenges: {
        title: 'Project Challenges',
        challenges: [
          'Lack of structured digital content to clearly present services and pricing',
          'Identifying functionalities that bring real operational value, not just presentation',
          'Replacing manual document exchange with a secure digital workflow',
          'Implementing a secure authentication system for clients and admins',
          'Building an admin dashboard with role-based access control',
          "Allowing adminis to manage parts of the website's content",
        ],
      },
      projectSolution:
        'We designed and developed a custom web application that combines a professional presentation website with a secure client portal. The project started with implementing validated forms and email delivery, followed by building a database-driven system to manage dynamic content such as services and pricing. We then developed a role-based admin dashboard that allows administrators to manage users, documents and website content. Finally, we implemented the client-facing interface, ensuring a modern, intuitive, and mobile-friendly user experience.',
      projectResults: {
        generalText:
          'The final application streamlined Senorexpert’s internal workflows and significantly improved client interaction:',
        lisstResults: [
          'Eliminated the need for physical document delivery',
          'Centralized accounting documents in a secure digital platform',
          'Improved efficiency in client–accountant communication',
          'Provided administrators with full control over users and content',
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
        'Business process optimization. Web applications can dramatically reduce manual work and operational friction.',
        'Functionality-driven development. Every feature was built to solve a real, day-to-day business problem.',
        'Scalable architecture. The application is designed to evolve with future business needs.',
      ],
      shortDescription: 'Custom Web Application for a local accounting firm',
      longDescription:
        'A secure, database-driven web application featuring a client portal, document upload system, and an admin dashboard for managing users, content, and accounting workflows.',
      button1: {
        text: 'Live Application',
        link: 'https://www.senorexpert.ro/',
      },
      image: imgWebApps1,
      category: 'Web Apps',
      logo: senorExpertLogo,
    },
    {
      title: 'FixAzi',
      companyName: 'FixAzi',
      aboutCompany:
        'FixAzi is a local device repair service specializing in smartphones, tablets, and laptops. Customers bring their devices to the service location for diagnostics and repairs, making fast communication and clear pricing essential to the business.',
      projectChallenges: {
        title: 'Project Challenges',
        challenges: [
          'Lack of structured digital content to present services and pricing',
          'Identifying meaningful functionalities beyond a simple presentation website',
          'Allowing administrators to manage supported devices and pricing without developer involvement',
          'Improving customer communication through real-time interaction',
          'Implementing a secure authentication system for admins',
          'Implementing a secure authentication system for administrators',
          'Building an admin dashboard for managing conversations and responding to messages',
          'Implementing real-time notifications for incoming messages',
        ],
      },
      projectSolution:
        'We designed and developed a web application that combines a professional presentation website with a real-time communication system. The project began by defining and implementing the core functionalities—content management and live chat—followed by creating structured content and a clean, user-friendly interface. An admin dashboard was built to allow secure management of services, prices, and customer conversations, while real-time notifications ensure no customer message is missed.',
      projectResults: {
        generalText:
          'The final application improves both customer experience and internal efficiency:',
        listResults: [
          'Clear presentation of services, pricing, and contact information',
          'Real-time live chat enabling instant customer communication',
          'Centralized admin interface for managing conversations and content',
          'Improved responsiveness to customer inquiries through notifications',
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
        'Customer-first communication. Live chat lowers the barrier for customers to ask questions and request services.',
        'Functionality-driven development. Core business needs were implemented first, followed by content and design.',
        'Scalable foundation. The application is built to support future features and increased user interaction.',
      ],
      shortDescription: 'Web Application for a local device repair service',
      longDescription:
        'A web application combining a presentational website with content management and real-time live chat, allowing customers to easily contact the service and administrators to manage communication and pricing.',
      button1: {
        text: 'Live Application',
        link: 'https://www.fixazi.com/',
      },
      image: imgWebApps2,
      category: 'Web Apps',
      logo: fixaziLogo,
    },
  ];

  const content = [
    {
      title: 'Promotional Poster for FixAzi Device Repair',
      companyName: 'FixAzi',

      aboutCompany:
        'FixAzi is a local repair service specializing in smartphones, tablets, and laptops. Customers bring their devices to the service location for diagnostics and repairs, making clear communication and visually appealing marketing materials essential for attracting new clients.',

      projectChallenges: {
        title: 'Project Challenges',
        challenges: [
          'Designing a poster that clearly communicates the business offer',
          'Choosing colors and typography that align with the brand identity',
          'Selecting high-quality stock images that visually support the message',
        ],
      },

      projectSolution:
        'We approached the poster design by first mapping out the placement of key elements—images, title, and offer details. The goal was to create a visually appealing poster that conveys the business offer effectively while capturing the attention of potential customers.',

      projectResults: {
        generalText:
          'The final poster presents the business offer clearly and professionally, enhancing FixAzi’s brand image and communication:',
        listResults: [
          'Clear and concise presentation of the services and offer',
          'Actionable contact information, including phone number and website',
          'Inclusion of company logo and slogan to boost brand recognition',
        ],
      },

      projectKeyPoints: [
        'Strong first impressions matter. Professionally designed promotional materials convey trust and credibility to potential clients.',
        'Purpose-driven design. Every element of the poster serves to highlight key offers and services.',
        'Attractive visuals drive engagement. Eye-catching and well-structured posters increase the likelihood of customer interaction.',
      ],

      shortDescription: 'Promotional poster for a local device repair service',

      longDescription:
        'A visually appealing promotional poster for FixAzi, designed to clearly communicate business offers and drive customer engagement.',

      button1: {
        text: 'View Full Poster',
        link: '../../assets/portfolio/content_creation/content1.png',
      },

      image: imgContent1,
      category: 'Ads',
      logo: fixaziLogo,
    },
    {
      title: 'Promotional Poster for CERTICORP',
      companyName: 'CERTICORP',

      aboutCompany:
        'CERTICORP is a specialized energy audit and management company that provides energy certificates for individuals, businesses, and institutions. Their services are essential when selling or renovating real estate, securing mortgages, or fulfilling regulatory requirements.',

      projectChallenges: {
        title: 'Project Challenges',
        challenges: [
          'Designing a poster that clearly communicates CERTICORP’s services and purpose',
          'Selecting colors and typography that reflect the brand while engaging potential clients',
          'Using high-quality imagery that visually supports the message and encourages action',
        ],
      },

      projectSolution:
        'We designed the poster to clearly communicate both the services CERTICORP provides and the situations in which these services are needed. The poster serves a dual purpose: informing potential clients about energy certificates and educating them on when such services are required, while maintaining a professional and approachable look.',

      projectResults: {
        generalText:
          'The final poster communicates CERTICORP’s offer clearly and effectively, helping potential clients understand when to use their services:',
        listResults: [
          'Clear and concise presentation of services and business offer',
          'Actionable contact information, including phone number and website',
          'Inclusion of company logo to strengthen brand recognition',
        ],
      },

      projectKeyPoints: [
        'Concise and meaningful content. Text is informative, easy to read, and highlights the value for potential clients.',
        'Visually suggestive design. Every image was chosen to imply an action or scenario, making the poster more engaging.',
        'Professional yet approachable. The design positions CERTICORP as both a trustworthy and friendly business.',
      ],

      shortDescription:
        'Promotional poster for an energy audit and management company',

      longDescription:
        'A professional and approachable poster for CERTICORP, designed to clearly present their energy audit and certificate services while educating potential clients.',

      button1: {
        text: 'View Full Poster',
        link: '../../assets/portfolio/content_creation/content2.png',
      },

      image: imgContent2,
      category: 'Ads',
      logo: certicorpLogo,
    },
    {
      title: 'Promotional Short Video for CERTICORP',
      companyName: 'CERTICORP',

      aboutCompany:
        'CERTICORP is a specialized energy audit and management company that provides energy certificates for individuals, businesses, and institutions. Their services are essential when selling or renovating real estate, securing mortgages, or meeting regulatory requirements.',

      projectChallenges: {
        title: 'Project Challenges',
        challenges: [
          'Creating a short video that simultaneously educates the public and promotes CERTICORP’s services',
          'Selecting high-quality free stock footage that effectively communicates the intended message',
          'Designing concise, engaging captions to complement the voice-over and reinforce the key points',
        ],
      },

      projectSolution:
        'We started by developing a concise script to address both educational and promotional goals. Then we carefully selected video footage and crafted captions to clearly convey the message within a short timeframe, while maintaining a professional and approachable tone.',

      projectResults: {
        generalText:
          'The final Reel successfully educates viewers while presenting CERTICORP’s services in a 19-second voice-over video with captions:',
        listResults: [
          'Clear explanation of when and why clients might need CERTICORP’s services',
          'Prominent display of contact information for easy follow-up',
          'Inclusion of the company logo to strengthen brand awareness',
        ],
      },

      projectKeyPoints: [
        'Concise storytelling. The Reel quickly communicates different scenarios in which CERTICORP’s services are relevant.',
        'Visually coherent design. Every stock video segment aligns with the message being presented, creating a seamless and engaging experience.',
        'Professional yet approachable style. The video conveys credibility while remaining friendly and accessible, encouraging viewer engagement.',
      ],

      shortDescription:
        'A short promotional video for CERTICORP highlighting their services and educating potential clients',

      longDescription:
        'A professional and engaging 19-second promotional video for CERTICORP, designed to educate viewers about their services and enhance brand awareness.',

      button1: {
        text: 'Watch Full Video',
        link: '',
      },

      image: imgContent3,
      video: reelCerticorp,
      poster: reelPoster,
      category: 'Reel',
      logo: certicorpLogo,
    },
  ];

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
        <h3>Websites - Creative & Functional</h3>
        <p>
          Discover our portfolio of responsive, user-friendly websites designed
          to elevate the online presence of your business.
        </p>
        <div className="container">{renderCards(websites)}</div>
      </section>

      <section className="mb-4">
        <h3>Web Applications - Efficient & Scalable</h3>
        <p>
          Explore our internal tools and web apps that streamline business
          proccesses and improve productivity.
        </p>
        <div className="container">{renderCards(webApps)}</div>
      </section>

      <section className="mb-4">
        <h3>Content Creation - Engaging & Impactful</h3>
        <p>
          Browse our advertising content, graphics and media projects designed
          to captivate your audience.
        </p>
        <div className="container">{renderCards(content)}</div>
      </section>
    </StyledSectionWebsites>
  );
}

export default SectionWebsites;
