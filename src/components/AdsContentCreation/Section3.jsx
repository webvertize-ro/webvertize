import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faArrowUpRightFromSquare,
  faComments,
  faUserPlus,
  faMobileScreenButton,
  faCartShopping,
  faImage,
  faPlayCircle,
  faImages,
  faLayerGroup,
  faMobileScreen,
  faFilm,
  faBookOpen,
  faSquarePollVertical,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';

const StyledSection3 = styled.section`
  padding-bottom: 4rem;
`;

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1.5rem;
  }
`;

const TitleTotal = styled.div``;

const Title = styled.h4``;

const Subtitle = styled.div`
  margin-top: -12px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Section3() {
  return (
    <StyledSection3 className="container">
      <ContentRow className="row">
        <TitleTotal className="mb-4">
          <Title>Facebook & Instagram Ads</Title>
          <Subtitle className="fs-6">
            Reach, Engage and Convert with Meta Advertising
          </Subtitle>
        </TitleTotal>

        <p className="fs-5">
          Meta platforms offer highly targeted advertising options based on
          intrests, behaviors and demographics.
        </p>
        <h4>Campaign Objectives We Support</h4>
        <StyledUl>
          <li>
            <div className="card rounded-4">
              <div className="card-body">
                <div className="fs-5 d-flex gap-2">
                  <div>
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div>
                    <strong>Awareness</strong> - Maximize reach and recall
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card rounded-4">
              <div className="card-body">
                <div className="fs-5 d-flex gap-2">
                  <div>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                  <div>
                    <strong>Traffic</strong> - Drive visitors to sites or
                    landing pages
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card rounded-4">
              <div className="card-body">
                <div className="fs-5 d-flex gap-2">
                  <div>
                    <FontAwesomeIcon icon={faComments} />
                  </div>
                  <div>
                    <strong>Engagement</strong> - Boost likes, comments and
                    video views
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card rounded-4">
              <div className="card-body">
                <div className="fs-5 d-flex gap-2">
                  <div>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </div>
                  <div>
                    <strong>Leads</strong> - Collect client details using
                    instant forms or messaging
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card rounded-4">
              <div className="card-body">
                <div className="fs-5 d-flex gap-2">
                  <div>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                  </div>
                  <div>
                    <strong>App Promotion</strong> - Increase installs and
                    in-app activity
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="card rounded-4">
              <div class="card-body">
                <div className="fs-5 d-flex gap-2">
                  <div>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                  <div>
                    <strong>Sales</strong> - Encourage direct purchases or
                    conversions
                  </div>
                </div>
              </div>
            </div>
          </li>
        </StyledUl>
      </ContentRow>
      {/* Campaign Types We Manage */}
      <ContentRow className="row">
        <h4>Available Ad Formats</h4>
        <div className="card rounded-4">
          <StyledUl className="list-group list-group-flush">
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faImage} />
              Image Ads
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faPlayCircle} />
              Video Ads/Reels
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faImages} />
              Carousel Ads
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faLayerGroup} />
              Collection Ads
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faMobileScreen} />
              Instant Experience Ads
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faFilm} />
              Slideshow Ads
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faBookOpen} />
              Stories Ads
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faSquarePollVertical} />
              Poll Ads
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faCubes} />
              Augmented Reality Ads
            </li>
          </StyledUl>
        </div>
      </ContentRow>
    </StyledSection3>
  );
}

export default Section3;
