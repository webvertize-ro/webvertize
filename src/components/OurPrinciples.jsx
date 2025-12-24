import {
  faChartLine,
  faGears,
  faHandshake,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Pillars = styled.div``;

const PillarsTitle = styled.h3`
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

const SubtitleCorePrinciples = styled.p``;

const PillarsRow = styled.div`
  display: flex;

  @media (max-width: 576px) {
    gap: 0.75rem;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  @media (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 0.25rem;
  }
`;

function OurPrinciples() {
  const { t } = useTranslation();

  return (
    <Pillars className="mb-5">
      <PillarsTitle>{t('homepage.ourCorePrinciples.title')}</PillarsTitle>
      <SubtitleCorePrinciples className="fs-5">
        {t('homepage.ourCorePrinciples.subtitle')}
      </SubtitleCorePrinciples>
      <div className="container">
        <PillarsRow className="row d-flex align-items-stretch">
          <div className="col-sm-12 col-lg-3">
            <Card className="card h-100 text-white">
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center gap-3 fs-5">
                  <FontAwesomeIcon icon={faChartLine} />
                  {t('homepage.ourCorePrinciples.cards.card1.cardTitle')}
                </h5>
                <p className="card-text fs-6">
                  {t('homepage.ourCorePrinciples.cards.card1.cardText')}
                </p>
              </div>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Card className="card h-100 text-white">
              <div className="card-body">
                <h5 className="card-title d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faGears} />
                  {t('homepage.ourCorePrinciples.cards.card2.cardTitle')}
                </h5>
                <p className="card-text">
                  {t('homepage.ourCorePrinciples.cards.card2.cardText')}
                </p>
              </div>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Card className="card h-100 text-white">
              <div className="card-body">
                <h5 className="card-title d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faHandshake} />
                  {t('homepage.ourCorePrinciples.cards.card3.cardTitle')}
                </h5>
                <p className="card-text">
                  {t('homepage.ourCorePrinciples.cards.card3.cardText')}
                </p>
              </div>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-3">
            <Card className="card h-100 text-white">
              <div className="card-body">
                <h5 className="card-title d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={faRocket} />
                  {t('homepage.ourCorePrinciples.cards.card4.cardTitle')}
                </h5>
                <p className="card-text">
                  {t('homepage.ourCorePrinciples.cards.card3.cardText')}
                </p>
              </div>
            </Card>
          </div>
        </PillarsRow>
      </div>
    </Pillars>
  );
}

export default OurPrinciples;
