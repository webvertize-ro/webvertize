import styled from 'styled-components';
import Form from '../../components/Form';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledMainSection = styled.div`
  padding: 4rem 6rem;
  @media (max-width: 576px) {
    padding: 1.5rem 2.25rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 1.75rem 2.625rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    padding: 2rem 3rem;
  }
`;

const Text = styled.div`
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  text-align: justify;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function MainSection() {
  return (
    <StyledMainSection className="container">
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <Text>
            <h3>Start the Conversation</h3>
            <p className="fs-5">
              Fill out the form below and we'll reach out by email to schedule a
              call and explore your project together.
            </p>
          </Text>

          <Form />
        </div>
        {/* CTA */}
        <div className="col-md-6">
          <h3>What to Expect</h3>
          <StyledP className="fs-5">
            Use the form to get in touch with us and we'll follow up to schedule
            a call. Whether you already have a clear project in mind or are
            still exploring ideas, we'll take the time to understand your needs
            and discuss the best way forward together.
          </StyledP>
          <h4>What happens next</h4>
          <StyledUl>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa1} />
              We review your message.
            </li>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa2} />
              We reach out by email to schedule a call.
            </li>
            <li className="fs-5">
              <FontAwesomeIcon icon={fa3} />
              We discuss your goals and see if we're a good fit.
            </li>
          </StyledUl>
        </div>
      </div>
    </StyledMainSection>
  );
}

export default MainSection;
