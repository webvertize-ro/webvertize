import Modal from '../Modal';
import { useState } from 'react';
import Form from '../Form';
import styled from 'styled-components';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import imgContent1 from '../../assets/portfolio/content_creation/content1.png';
import { Video } from 'yet-another-react-lightbox/plugins';
import {
  faCheckSquare,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardWrapper = styled.div`
  perspective: 1000px;

  &:hover .card-flip-inner {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
`;

const CardFace = styled.div`
  backface-visibility: hidden;
  height: 100%;
`;

const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

const CardBodyBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const StyledP = styled.p`
  text-align: justify;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledButton = styled.a`
  text-decoration: none;
  background-color: #1b3c53;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #fff;
`;

function CardFlip({ project }) {
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="col-md-6 col-lg-4">
      <CardWrapper>
        <CardInner className="card-flip-inner">
          {/* Front */}
          <CardFace>
            <div className="card h-100 rounded-4">
              <img
                src={project.image}
                className="card-img-top rounded-top-4"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.shortDescription}</p>
                <div className="text-muted">{project.category}</div>
              </div>
            </div>
          </CardFace>

          {/* Back */}
          <CardBack>
            <div className="card h-100 d-flex justify-content-center align-items-center rounded-4">
              <CardBodyBack className="card-body d-flex flex-column gap-1">
                <h5 className="card-title">{project.title}</h5>
                <StyledP className="card-text">
                  {project.longDescription}
                </StyledP>
                {/* This will open a modal */}
                <button
                  onClick={() => setShowForm(true)}
                  className="btn btn-primary btn-sm"
                >
                  Full Project Details
                </button>
              </CardBodyBack>
            </div>
          </CardBack>
        </CardInner>
      </CardWrapper>
      <Modal
        show={showForm}
        title={project.title}
        onClose={() => setShowForm(false)}
        logo={project.logo}
      >
        {/* Websites & Web Apps */}
        {project.category === 'websites' || project.category === 'Web Apps' ? (
          <>
            <h3>Project Overview</h3>
            <h4>More about {project.companyName}</h4>
            <p>{project.aboutCompany}</p>
            {/* Challenges */}
            <section>
              <h4>{project.projectChallenges?.title}</h4>
              <StyledUl>
                {project.projectChallenges?.challenges.map((ch) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {ch}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Solution */}
            <section>
              <h4>Solution</h4>
              <p>{project.projectSolution}</p>
            </section>
            {/* Results */}
            <section>
              <h4>Results</h4>
              <p>{project.projectResults?.generalText}</p>
              <StyledUl>
                {project.projectResults?.listResults?.map((res) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {res}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Key Points */}
            <section>
              <h4>Key Points</h4>
              <StyledUl>
                {project.projectKeyPoints?.map((point) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {point}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Live Project */}
            <section>
              <h4>Live Project</h4>
              <StyledButton href={project.button1?.link} target="_blank">
                {project.button1?.text}
              </StyledButton>
            </section>
          </>
        ) : (
          ''
        )}
        {/* Ads */}
        {project.category === 'Ads' ? (
          <>
            <h3>Project Overview</h3>
            <h4>More about {project.companyName}</h4>
            <p>{project.aboutCompany}</p>
            {/* Challenges */}
            <section>
              <h4>{project.projectChallenges?.title}</h4>
              <StyledUl>
                {project.projectChallenges?.challenges.map((ch) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {ch}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Solution */}
            <section>
              <h4>Solution</h4>
              <p>{project.projectSolution}</p>
            </section>
            {/* Results */}
            <section>
              <h4>Results</h4>
              <p>{project.projectResults?.generalText}</p>
              <StyledUl>
                {project.projectResults?.listResults?.map((res) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {res}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Key Points */}
            <section>
              <h4>Key Points</h4>
              <StyledUl>
                {project.projectKeyPoints?.map((point) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {point}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Full Image */}
            <section>
              <h4>Full Image</h4>
              <StyledButton
                href="#!"
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                View Full Image
              </StyledButton>

              {/* Lightbox */}
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: project.image }]}
              />
            </section>
          </>
        ) : (
          ''
        )}
        {/* Reel */}
        {project.category === 'Reel' ? (
          <>
            <h3>Project Overview</h3>
            <h4>More about {project.companyName}</h4>
            <p>{project.aboutCompany}</p>
            {/* Challenges */}
            <section>
              <h4>{project.projectChallenges?.title}</h4>
              <StyledUl>
                {project.projectChallenges?.challenges.map((ch) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {ch}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Solution */}
            <section>
              <h4>Solution</h4>
              <p>{project.projectSolution}</p>
            </section>
            {/* Results */}
            <section>
              <h4>Results</h4>
              <p>{project.projectResults?.generalText}</p>
              <StyledUl>
                {project.projectResults?.listResults?.map((res) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {res}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Key Points */}
            <section>
              <h4>Key Points</h4>
              <StyledUl>
                {project.projectKeyPoints?.map((point) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    {point}
                  </li>
                ))}
              </StyledUl>
            </section>
            {/* Full Image */}
            <section>
              <h4>Full Video</h4>
              <StyledButton
                href="#!"
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                View Full Video
              </StyledButton>

              {/* Lightbox */}
              <Lightbox
                plugins={[Video]}
                open={open}
                close={() => setOpen(false)}
                slides={[
                  {
                    type: 'video',
                    width: 1080,
                    height: 1920,
                    poster: project.poster,
                    sources: [
                      {
                        src: project.video,
                        type: 'video/mp4',
                      },
                    ],
                  },
                  // ...
                ]}
                // ...
              />
            </section>
          </>
        ) : (
          ''
        )}
      </Modal>
    </div>
  );
}

export default CardFlip;
