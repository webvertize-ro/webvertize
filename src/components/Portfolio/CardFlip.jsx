import Modal from '../Modal';
import { useState } from 'react';
import Form from '../Form';
import styled from 'styled-components';

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
  align-items: center;
`;

const StyledP = styled.p`
  text-align: justify;
`;

function CardFlip({ project }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="col-md-6 col-lg-4">
      <CardWrapper>
        <CardInner className="card-flip-inner">
          {/* Front */}
          <CardFace>
            <div className="card h-100">
              <img
                src={project.image}
                className="card-img-top"
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
            <div className="card h-100 d-flex justify-content-center align-items-center">
              <CardBodyBack className="card-body text-center d-flex flex-column align-items-center justify-content-center gap-1">
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
      >
        <h3>Project Overview</h3>
        <h4>More about {project.companyName}</h4>
        <p>{project.aboutCompany}</p>
        {/* Challenges */}
        <section>
          <h4>{project.projectChallenges?.title}</h4>
          <ul>
            {project.projectChallenges?.challenges.map((ch) => (
              <li>{ch}</li>
            ))}
          </ul>
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
          <ul>
            {project.projectResults?.listResults?.map((res) => (
              <li>{res}</li>
            ))}
          </ul>
        </section>
        {/* Key Points */}
        <section>
          <h4>Key Points</h4>
          <ul>
            {project.projectKeyPoints?.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </section>
        {/* Live Project */}
        <section>
          <h4>Live Project</h4>
          <a href={project.button1?.link} target="_blank">
            {project.button1?.text}
          </a>
        </section>
      </Modal>
    </div>
  );
}

export default CardFlip;
