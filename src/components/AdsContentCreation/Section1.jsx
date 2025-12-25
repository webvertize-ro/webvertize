import {
  faBorderAll,
  faBullhorn,
  faFilm,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StyledSection1 = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Title = styled.h2``;

const Subtitle = styled.div`
  /* margin-top: -14px; */
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const InnerTitle = styled.h4``;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.li`
  border: 1px solid #f0f0f0;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ItemDescription = styled.div`
  padding-left: 1rem;
`;

const InnerUl = styled.ul`
  list-style-type: none;
  padding-left: 3rem;
`;

const InnerUlItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 0.8rem;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #182f3f;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.3s ease;
  border: 2px solid #182f3f;
  white-space: nowrap;

  &:hover {
    background-color: #203d52;
  }
`;

function Section1() {
  const { t } = useTranslation();
  return (
    <StyledSection1 className="container">
      <Title>{t('AdsContentCreation.section1.title')}</Title>
      <Subtitle className="fs-5 mb-4">
        {t('AdsContentCreation.section1.subtitle')}
      </Subtitle>
      <InnerTitle>{t('AdsContentCreation.section1.title2')}</InnerTitle>
      <StyledUl className="fs-5">
        <Item className="row">
          <div className="col-md-10">
            <ItemTitle>
              <FontAwesomeIcon icon={faBorderAll} />
              {t('AdsContentCreation.section1.list.item1.title')}
            </ItemTitle>
            <ItemDescription>
              {t('AdsContentCreation.section1.list.item1.subtitle')}
            </ItemDescription>
            <InnerUl>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item1.listInner.itemInner1'
                )}
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item1.listInner.itemInner2'
                )}
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item1.listInner.itemInner3'
                )}
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item1.listInner.itemInner4'
                )}
              </InnerUlItem>
            </InnerUl>
          </div>
          <div className="col-md-2">
            <StyledLink to="/portfolio">
              {t('AdsContentCreation.section1.list.item1.listInner.buttonText')}
            </StyledLink>
          </div>
        </Item>
        <Item className="row">
          <div className="col-md-10 mb-4">
            <ItemTitle>
              <FontAwesomeIcon icon={faFilm} />
              {t('AdsContentCreation.section1.list.item2.title')}
            </ItemTitle>
            <ItemDescription>
              {t('AdsContentCreation.section1.list.item2.subtitle')}
            </ItemDescription>
            <InnerUl>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item2.listInner.itemInner1'
                )}
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item2.listInner.itemInner2'
                )}
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item2.listInner.itemInner3'
                )}
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item2.listInner.itemInner4'
                )}
              </InnerUlItem>
            </InnerUl>
          </div>
          <div className="col-md-2">
            <StyledLink to="/portfolio">
              {t('AdsContentCreation.section1.list.item2.listInner.buttonText')}
            </StyledLink>
          </div>
        </Item>

        <Item className="row">
          <div className="col-md-10 mb-4">
            <ItemTitle>
              <FontAwesomeIcon icon={faBullhorn} />
              {t('AdsContentCreation.section1.list.item3.title')}
            </ItemTitle>
            <ItemDescription>
              {t('AdsContentCreation.section1.list.item3.subtitle')}
            </ItemDescription>
            <InnerUl>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item3.listInner.itemInner1'
                )}
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item3.listInner.itemInner2'
                )}
              </InnerUlItem>
              <InnerUlItem>
                <FontAwesomeIcon icon={faSquareCheck} />
                {t(
                  'AdsContentCreation.section1.list.item3.listInner.itemInner3'
                )}
              </InnerUlItem>
            </InnerUl>
          </div>
          <div className="col-md-2"></div>
        </Item>
      </StyledUl>
    </StyledSection1>
  );
}

export default Section1;
