import styled from 'styled-components';
import {
  faPenNib,
  faChartLine,
  faComments,
  faBullseye,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const StyledSection4 = styled.div`
  /* border: 1px solid black; */
`;

const ContentRow = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
  }
`;

const TitleTotal = styled.div``;

const Title = styled.h2``;

const Subtitle = styled.div`
  /* margin-top: -12px; */
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
  const { t } = useTranslation();

  return (
    <StyledSection4 className="container">
      <ContentRow className="row">
        <TitleTotal>
          <Title>{t('AdsContentCreation.section4.title')}</Title>
          <Subtitle className="fs-4">
            {t('AdsContentCreation.section4.subtitle')}
          </Subtitle>
        </TitleTotal>

        <StyledP className="fs-5">
          {t('AdsContentCreation.section4.description')}
        </StyledP>
        <StyledUl>
          <Item>
            <div class="card rounded-4">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faPenNib} />
                </div>
                <div>{t('AdsContentCreation.section4.list.item1')}</div>
              </div>
            </div>
          </Item>
          <Item>
            <div class="card rounded-4">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div>{t('AdsContentCreation.section4.list.item2')}</div>
              </div>
            </div>
          </Item>
          <Item>
            <div class="card rounded-4">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <div>{t('AdsContentCreation.section4.list.item3')}</div>
              </div>
            </div>
          </Item>
          <Item>
            <div class="card rounded-4">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faBullseye} />
                </div>
                <div>{t('AdsContentCreation.section4.list.item4')}</div>
              </div>
            </div>
          </Item>
          <Item>
            <div class="card rounded-4">
              <div class="card-body d-flex gap-2 fs-5">
                <div>
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div>{t('AdsContentCreation.section4.list.item5')}</div>
              </div>
            </div>
          </Item>
        </StyledUl>
      </ContentRow>
    </StyledSection4>
  );
}

export default Section4;
