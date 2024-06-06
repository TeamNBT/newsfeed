import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SectionHeaderHook from '@/pages/Home/SectionHeader';
import { Card, StCards } from '@/components/Card';
import NoFeeds from '@/components/NoFeeds';

const Home = () => {
  const feeds = useSelector(({ feeds }) => feeds.feeds);

  if (!feeds.length) {
    return (
      <StArticle>
        <SectionHeaderHook />
        <NoFeeds />
      </StArticle>
    );
  }

  return (
    <StArticle>
      <SectionHeaderHook />
      <StCards>
        {feeds.map((feed) => (
          <Card key={feed.id} feed={feed} />
        ))}
      </StCards>
    </StArticle>
  );
};

const StArticle = styled.article`
  margin-bottom: 150px;
`;

export default Home;
