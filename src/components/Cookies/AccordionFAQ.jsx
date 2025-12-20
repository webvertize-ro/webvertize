import styled from 'styled-components';
import AccordionItem from './AccordionItem';
import { useState } from 'react';

const faqs = [
  {
    title: 'What are cookies and how do they work?',
    text: 'Cookies are small text files that websites store on your device when you visit them. They are commonly used to remember information about your visit, such as preferences, login status or usage patterns, in order to improve the browsing experience. When you visit a website, cookies are saved in your browser and then sent back to the website on subsequent visits. This allows the website to recognize your device and remember certain information, helping pages load correctly or function as expected.',
  },
  {
    title: 'Why do websites use cookies?',
    text: 'Websites typically use cookies to enhance functionality, analyze traffic, personalize content and improve overall user experience. Some cookies are essential for basic features, while others help website owners understand how visitors interact with their site.',
  },
  {
    title: 'What types of cookies are commonly used?',
    text: 'Common cookie types include essential cookies (required for core functionality), performance or analytics cookies (used to measure website usage), functionality cookies (used to remember preferences) and marketing cookies (used for advertising and tracking).',
  },
  {
    title: 'Does Webvertize use cookies?',
    text: 'At this time, Webvertize does not use cookies on this website. You can browse the site without any cookie-based tracking or data storage.',
  },
  {
    title: 'Will Webvertize use cookies in the future?',
    text: 'If cookies are introduced in the future, this page will be updated accordingly. We are committed to transparency and will clearly explain what cookies are used, why they are implemented  and how they affect your browsing experience.',
  },
  {
    title: 'How will I be informed about cookie usage changes?',
    text: 'Any changes related to cookie usage will be communicated through updates to this Cookie Policy page. Where required, you will also be given clear choices regarding cookie consent.',
  },
];

const Accordion = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function AccordionFAQ() {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <Accordion className="container">
      <h3>Cookie Information and FAQs</h3>
      <p className="fs-5">
        Find below some general information about cookies, their purpose and our
        current usage.
      </p>
      {faqs.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={el.title}
          num={index + 1}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionFAQ;
