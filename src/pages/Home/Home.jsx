import styled from 'styled-components';
import SectionHeader from '@/pages/Home/SectionHeader';
import Card, { Cards } from '@/components/Card/Card';

const Home = () => {
  return (
    <div>
      <Article>
        <SectionHeader />
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </Article>
    </div>
  );
};

const Article = styled.article`
  height: 1177.3px;
  gap: 16px;
  padding: 0;
  .Typo-Group-HStack {
    height: 28px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 9px;
    padding: 0;
  }
  .prm-text {
    width: 70px;
    height: 28px;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }
  .Rectangle-23 {
    width: 1px;
    height: 16px;
    flex-grow: 0;
    background-color: rgba(217, 217, 217, 0.8);
  }
  .scd-text {
    width: 147px;
    height: 22px;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #999;
  }
  .divider {
    width: 1056px;
    height: 1px;
    flex-grow: 0;
    background-color: #555;
  }
  .image-23 {
    width: auto;
    height: 293.4px;
    align-self: stretch;
    flex-grow: 0;
    border-radius: 12px;
    background-color: #fff;
  }
  header {
    height: 28px;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 22px;
    padding: 0;
  }
  img.ic_general_like_fill {
    width: 24px;
    height: 24px;
    flex-grow: 0;
    object-fit: contain;
  }
`;

export default Home;
