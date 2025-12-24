import styled from 'styled-components';

const StyledSection4 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

function WebAppsSummary() {
  return (
    <div className="container">
      <StyledSection4>
        <h2 className="mb-3">Summary Value</h2>
        <StyledP className="fs-5">
          Instead of trying to adapt flat, generic software to your
          organization, a custom web application allows you to digitize
          processes in a way that makes sense for your specific workflow.
        </StyledP>
        <StyledP className="fs-5">
          From strategy and architecture to UX, development, and post-launch
          support, we build applications meant to support your operations for
          years — not months.
        </StyledP>
      </StyledSection4>
    </div>
  );
}

export default WebAppsSummary;
