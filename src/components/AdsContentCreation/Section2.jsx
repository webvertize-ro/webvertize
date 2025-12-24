import styled from 'styled-components';
import googleAdsCampaigns from '../../assets/google_ads_campaigns_image.jpg';
import {
  faUserGear,
  faBullseye,
  faChartLine,
  faSliders,
  faBell,
  faArrowTrendUp,
  faFileLines,
  faMagnifyingGlass,
  faRectangleAd,
  faCartShopping,
  faVideo,
  faMobileScreenButton,
  faRocket,
  faSprayCanSparkles,
  faLocationDot,
  faHotel,
  faGears,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const StyledSection2 = styled.section`
  padding-bottom: 4rem;
`;

const TitleTotal = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2``;

const Subtitle = styled.div`
  margin-top: -12px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1.5rem;
  }
`;

const GoogleAdsCampaigns = styled.img`
  border-radius: 1.2rem;

  @media (max-width: 576px) {
    max-width: 300px;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    max-width: 450px;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 500px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 650px;
  }
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  text-align: justify;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function Section2() {
  const { t } = useTranslation();
  return (
    <StyledSection2 className="container">
      <div className="row">
        <TitleTotal>
          <Title>{t('AdsContentCreation.section2.title')}</Title>
          <Subtitle className="fs-6">
            {t('AdsContentCreation.section2.subtitle')}
          </Subtitle>
        </TitleTotal>

        <Content>
          <ContentRow className="row mb-4">
            <div className="col-sm-12 col-xl-4 d-flex align-items-center justify-content-center">
              <GoogleAdsCampaigns
                src={googleAdsCampaigns}
                className="img-fluid"
              />
            </div>
            <div className="col-sm-12 col-xl-8 d-flex align-items-center justify-content-center">
              <StyledP className="fs-5">
                {t('AdsContentCreation.section2.description')}
              </StyledP>
            </div>
          </ContentRow>
        </Content>
        {/* Our Process */}
        <ContentRow className="row">
          <h3>{t('AdsContentCreation.section2.ourProcess.title')}</h3>
          <StyledUl>
            <li>
              <div class="card rounded-4">
                <div class="card-body">
                  <h4 className="d-flex gap-2">
                    <FontAwesomeIcon icon={faUserGear} />
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item1.item1Title'
                    )}
                  </h4>
                  <p className="fs-5">
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item1.item1Text'
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card rounded-4">
                <div class="card-body">
                  <h4 className="d-flex gap-2">
                    <FontAwesomeIcon icon={faBullseye} />
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item2.item2Title'
                    )}
                  </h4>
                  <p className="fs-5">
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item2.item2Text'
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card rounded-4">
                <div class="card-body">
                  <h4 className="d-flex gap-2">
                    <FontAwesomeIcon icon={faChartLine} />
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item3.item3Title'
                    )}
                  </h4>
                  <p className="fs-5">
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item3.item3Text'
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card rounded-4">
                <div class="card-body">
                  <h4 className="d-flex gap-2">
                    <FontAwesomeIcon icon={faSliders} />
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item4.item4Title'
                    )}
                  </h4>
                  <p className="fs-5">
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item4.item4Text'
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card rounded-4">
                <div class="card-body">
                  <h4 className="d-flex gap-2">
                    <FontAwesomeIcon icon={faBell} />
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item5.item5Title'
                    )}
                  </h4>
                  <p className="fs-5">
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item5.item5Text'
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card rounded-4">
                <div class="card-body">
                  <h4 className="d-flex gap-2">
                    <FontAwesomeIcon icon={faArrowTrendUp} />
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item6.item6Title'
                    )}
                  </h4>
                  <p className="fs-5">
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item6.item6Text'
                    )}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="card rounded-4">
                <div class="card-body">
                  <h4 className="d-flex gap-2">
                    <FontAwesomeIcon icon={faFileLines} />
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item7.item7Title'
                    )}
                  </h4>
                  <p className="fs-5">
                    {t(
                      'AdsContentCreation.section2.ourProcess.list.item7.item7Text'
                    )}
                  </p>
                </div>
              </div>
            </li>
          </StyledUl>
        </ContentRow>
        {/* Campaign Types We Manage */}
        <ContentRow className="row">
          <h4>{t('AdsContentCreation.section2.campaignTypes.title')}</h4>
          <div className="card rounded-4">
            <StyledUl className="list-group list-group-flush fs-5 p-4">
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item1.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item1.text'
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faRectangleAd} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item2.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item2.text'
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item3.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item3.text'
                  )}
                  .
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faVideo} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item4.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item4.text'
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item5.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item5.text'
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item6.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item6.text'
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faSprayCanSparkles} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item7.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item7.text'
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item8.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item8.text'
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faHotel} />
                </div>
                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item9.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item9.text'
                  )}
                </div>
              </li>
              <li className="list-group-item d-flex gap-2">
                <div>
                  <FontAwesomeIcon icon={faGears} />
                </div>

                <div>
                  <strong>
                    {t(
                      'AdsContentCreation.section2.campaignTypes.list.item10.title'
                    )}
                  </strong>{' '}
                  -{' '}
                  {t(
                    'AdsContentCreation.section2.campaignTypes.list.item10.text'
                  )}
                </div>
              </li>
            </StyledUl>
          </div>
        </ContentRow>
      </div>
    </StyledSection2>
  );
}

export default Section2;
