import styled from 'styled-components';
import AccordionItem from './AccordionItem';
import { useState } from 'react';

const faqs = [
  {
    title: 'cookiesPage.faqs.item1.question',
    text: 'cookiesPage.faqs.item1.answer',
  },
  {
    title: 'cookiesPage.faqs.item2.question',
    text: 'cookiesPage.faqs.item2.answer',
  },
  {
    title: 'cookiesPage.faqs.item3.question',
    text: 'cookiesPage.faqs.item3.answer',
  },
  {
    title: 'cookiesPage.faqs.item4.question',
    text: 'cookiesPage.faqs.item4.answer',
  },
  {
    title: 'cookiesPage.faqs.item5.question',
    text: 'cookiesPage.faqs.item5.answer',
  },
  {
    title: 'cookiesPage.faqs.item6.question',
    text: 'cookiesPage.faqs.item6.answer',
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
