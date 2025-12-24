import {
  faChartLine,
  faChartPie,
  faComments,
  faDatabase,
  faTicket,
  faUserLock,
  faUserShield,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledWebAppsFeatures = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledP = styled.p`
  text-align: justify;
  margin-bottom: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
`;

const StyledFontAwesomeIocn = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

function WebAppsFeatures() {
  const { t } = useTranslation();
  return (
    <StyledWebAppsFeatures className="container">
      <div className="row">
        <h2 className="mb-3">{t('webapps.webAppsFeatures.title')}</h2>
        <div className="col-12 mb-4">
          <StyledP className="fs-5 mb-4">
            {t('webapps.webAppsFeatures.subtitle')}
          </StyledP>

          <div>
            <StyledUl className="fs-5">
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faChartLine} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsFeatures.list.item1.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsFeatures.list.item1.text')}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faUserShield} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsFeatures.list.item2.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsFeatures.list.item2.text')}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faDatabase} />
                        </div>

                        <div>
                          <strong>
                            {t('webapps.webAppsFeatures.list.item3.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsFeatures.list.item3.text')}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faListCheck} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsFeatures.list.item4.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsFeatures.list.item4.text')}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faTicket} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsFeatures.list.item5.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsFeatures.list.item5.text')}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faComments} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsFeatures.list.item6.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsFeatures.list.item6.text')}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faUserLock} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsFeatures.list.item7.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsFeatures.list.item7.text')}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faChartPie} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsFeatures.list.item8.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsFeatures.list.item8.text')}
                    </div>
                  </div>
                </div>
              </li>
            </StyledUl>
          </div>
        </div>
      </div>
    </StyledWebAppsFeatures>
  );
}

export default WebAppsFeatures;
