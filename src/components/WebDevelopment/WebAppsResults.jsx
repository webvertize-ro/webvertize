import {
  faArrowTrendUp,
  faBullseye,
  faClock,
  faEye,
  faHandshake,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledSection3 = styled.section`
  display: flex;
  flex-direction: column;
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

function WebAppsResults() {
  const { t } = useTranslation();

  return (
    <StyledSection3 className="container">
      <div className="row">
        <h2 className="mb-3">{t('webapps.webAppsResults.title')}</h2>
        <div className="col-12 mb-4">
          <StyledP className="fs-5 mb-4">
            {t('webapps.webAppsResults.subtitle')}
          </StyledP>

          <div>
            <StyledUl className="fs-5">
              <li>
                <div className="card rounded-4">
                  <div className="card-body">
                    <div className="card-title">
                      <div className="d-flex gap-2">
                        <div>
                          <StyledFontAwesomeIocn icon={faClock} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsResults.list.item1.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsResults.list.item1.text')}
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
                          <StyledFontAwesomeIocn icon={faBullseye} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsResults.list.item2.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsResults.list.item2.text')}
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
                          <StyledFontAwesomeIocn icon={faEye} />
                        </div>

                        <div>
                          <strong>
                            {t('webapps.webAppsResults.list.item3.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsResults.list.item3.text')}
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
                          <StyledFontAwesomeIocn icon={faArrowTrendUp} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsResults.list.item4.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsResults.list.item4.text')}
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
                          <StyledFontAwesomeIocn icon={faUsers} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsResults.list.item5.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsResults.list.item5.text')}
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
                          <StyledFontAwesomeIocn icon={faHandshake} />
                        </div>
                        <div>
                          <strong>
                            {t('webapps.webAppsResults.list.item6.title')}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="card-text">
                      {t('webapps.webAppsResults.list.item6.text')}
                    </div>
                  </div>
                </div>
              </li>
            </StyledUl>
          </div>
        </div>
      </div>
    </StyledSection3>
  );
}

export default WebAppsResults;
