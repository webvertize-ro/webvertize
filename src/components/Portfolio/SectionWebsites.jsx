import imgWebsites1 from '../../assets/portfolio/websites/website1.jpg';
import imgWebsites2 from '../../assets/portfolio/websites/website2.jpg';
import imgWebApps1 from '../../assets/portfolio/web_apps/web_app1.jpg';
import imgWebApps2 from '../../assets/portfolio/web_apps/web_app2.jpg';
import imgContent1 from '../../assets/portfolio/content_creation/content1.png';
import imgContent2 from '../../assets/portfolio/content_creation/content2.png';
import imgContent3 from '../../assets/portfolio/content_creation/reel_thumbs_up.png';
import edionTransLogo from '../../assets/portfolio/websites/logos/ediontrans_logo_nobg.png';
import fotoAddaLogo from '../../assets/portfolio/websites/logos/foto_adda_logo.svg';
import CardFlip from './CardFlip';
import styled from 'styled-components';

const StyledSectionWebsites = styled.div`
  padding: 2.5rem 0 4rem;
`;

function SectionWebsites() {
  const websites = [
    {
      title: 'Edion Trans',
      companyName: 'Edion Trans',
      logo: { edionTransLogo },
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
    },
    {
      title: 'FixAzi',
      shortDescription: 'Web application for a local phone repair shop',
      longDescription:
        'Web Application that allows users to send forms and use the live-chat functionality. The owner has an admin page from where he can reply to the chat messages.',
      image: imgWebApps2,
      category: 'Web Apps',
    },
  ];

  const content = [
    {
      title: 'Promotional Image for Energy Management',
      shortDescription: 'Advertisment for Energy Efficiency',
      longDescription:
        'This creative image targets small and medium businesses in order to make them investigate their energy efficiency.',
      image: imgContent1,
      category: 'Ads',
    },
    {
      title: 'Promotional Poster for Energy Certificates',
      shortDescription: 'Advertisment for Issuing Energy Certificates',
      longDescription:
        'This creative image is designed to target people or companies that are either selling, renovating or taking a loan.',
      image: imgContent2,
      category: 'Ads',
    },
    {
      title: 'Facebook Reel',
      shortDescription: '',
      longDescription: '',
      image: imgContent3,
      category: 'Ads',
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
