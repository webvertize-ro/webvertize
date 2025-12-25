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
import { useTranslation } from 'react-i18next';

const StyledSection3 = styled.section`
  padding-bottom: 4rem;
  /* border: 1px solid white; */
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

const Title = styled.h2``;

const Subtitle = styled.div`
  /* margin-top: -12px; */
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Section3() {
  const { t } = useTranslation();

  return (
    <StyledSection3 className="container">
      <ContentRow className="row">
        <TitleTotal className="mb-4">
          <Title>{t('AdsContentCreation.section3.title')}</Title>
          <Subtitle className="fs-5">
            {t('AdsContentCreation.section3.subtitle')}
          </Subtitle>
        </TitleTotal>

        <p className="fs-4">{t('AdsContentCreation.section3.description')}</p>
        <h2>{t('AdsContentCreation.section3.campaignObjectives.title')}</h2>
        <StyledUl>
          <li>
            <div className="card rounded-4">
              <div className="card-body">
                <div className="fs-5 d-flex gap-2">
                  <div>
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div>
                    <strong>
                      {t(
                        'AdsContentCreation.section3.campaignObjectives.list.item1.title'
                      )}
                    </strong>{' '}
                    -{' '}
                    {t(
                      'AdsContentCreation.section3.campaignObjectives.list.item1.text'
                    )}
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
                    <strong>
                      {t(
                        'AdsContentCreation.section3.campaignObjectives.list.item2.title'
                      )}
                    </strong>{' '}
                    -{' '}
                    {t(
                      'AdsContentCreation.section3.campaignObjectives.list.item2.text'
                    )}
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
                    <strong>
                      {t(
                        'AdsContentCreation.section3.campaignObjectives.list.item3.title'
                      )}
                    </strong>{' '}
                    -{' '}
                    {t(
                      'AdsContentCreation.section3.campaignObjectives.list.item3.text'
                    )}
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
                    <strong>
                      {t(
                        'AdsContentCreation.section3.campaignObjectives.list.item4.title'
                      )}
                    </strong>{' '}
                    -{' '}
                    {t(
                      'AdsContentCreation.section3.campaignObjectives.list.item4.text'
                    )}
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
                    <strong>
                      {t(
                        'AdsContentCreation.section3.campaignObjectives.list.item5.title'
                      )}
                    </strong>{' '}
                    -{' '}
                    {t(
                      'AdsContentCreation.section3.campaignObjectives.list.item5.text'
                    )}
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
                    <strong>
                      {t(
                        'AdsContentCreation.section3.campaignObjectives.list.item6.title'
                      )}
                    </strong>{' '}
                    -{' '}
                    {t(
                      'AdsContentCreation.section3.campaignObjectives.list.item6.text'
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </StyledUl>
      </ContentRow>
      {/* Campaign Types We Manage */}
      <ContentRow className="row">
        <h2>{t('AdsContentCreation.section3.adFormats.title')}</h2>
        <div className="card rounded-4">
          <StyledUl className="list-group list-group-flush">
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faImage} />
              {t('AdsContentCreation.section3.adFormats.list.item1')}
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faPlayCircle} />
              {t('AdsContentCreation.section3.adFormats.list.item2')}
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faImages} />
              {t('AdsContentCreation.section3.adFormats.list.item3')}
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faLayerGroup} />
              {t('AdsContentCreation.section3.adFormats.list.item4')}
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faMobileScreen} />
              {t('AdsContentCreation.section3.adFormats.list.item5')}
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faFilm} />
              {t('AdsContentCreation.section3.adFormats.list.item6')}
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faBookOpen} />
              {t('AdsContentCreation.section3.adFormats.list.item7')}
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faSquarePollVertical} />
              {t('AdsContentCreation.section3.adFormats.list.item8')}
            </li>
            <li className="list-group-item d-flex gap-2 align-items-center fs-5">
              <FontAwesomeIcon icon={faCubes} />
              {t('AdsContentCreation.section3.adFormats.list.item9')}
            </li>
          </StyledUl>
        </div>
      </ContentRow>
    </StyledSection3>
  );
}

export default Section3;
