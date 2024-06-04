import styled from 'styled-components';
import SectionHeaderHook from '@/pages/Home/SectionHeader';
import { Card, StCards } from '@/components/Card';

const Home = () => {
  return (
    <StArticle>
      <SectionHeaderHook />
      <StCards>
        <Card />
        <Card />
        <Card />
        <Card />
      </StCards>
    </StArticle>
  );
};

const StArticle = styled.article`
  margin-bottom: 150px;
`;

export default Home;
