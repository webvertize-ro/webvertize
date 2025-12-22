import styled from 'styled-components';
import {
  faPenNib,
  faChartLine,
  faComments,
  faBullseye,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
  }
`;

const TitleTotal = styled.div``;

const Title = styled.h4``;

const Subtitle = styled.div`
  margin-top: -12px;
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  text-align: justify;

  @media (max-width: 576px) {
    padding: 0 1.5rem;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.li``;

function Section4() {
  return (
    <div className="container">
      <ContentRow className="row">
        <TitleTotal>
          <Title>Why Work With Webvertize</Title>
          <Subtitle>Simple Process, Powerful Results</Subtitle>
        </TitleTotal>

        <StyledP className="fs-5">
          At Webvertize, we don't believe advertising should feel complicated,
          stressful or overwhelming. We approach each advertising project as a
          creative journey that we take together - one where ideas flow openly,
          experimentation is ecouraged and the process itself becomes engaging
          and even fun. Great campaigns come from great teamwork and we make
          sure that teamwork feels natural, energizing and genuinely enjoyable.
        </StyledP>
        <StyledUl>
          <Item>
            <div class="card">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faPenNib} />
                </div>
                <div>High-quality creative made for your business</div>
              </div>
            </div>
          </Item>
          <Item>
            <div class="card">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div>Data-driven optimization across platforms</div>
              </div>
            </div>
          </Item>
          <Item>
            <div class="card">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <div>Ongoing communication and clear reporting</div>
              </div>
            </div>
          </Item>
          <Item>
            <div class="card">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faBullseye} />
                </div>
                <div>Strategy tailored to your goals and budget</div>
              </div>
            </div>
          </Item>
          <Item>
            <div class="card">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div>
                  A single partner for both creative assets and campaign
                  management
                </div>
              </div>
            </div>
          </Item>
        </StyledUl>
      </ContentRow>
    </div>
  );
}

export default Section4;
