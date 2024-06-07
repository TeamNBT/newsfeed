import styled from 'styled-components';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import SectionHeaderHook from '@/pages/Home/SectionHeader';
import { Card, StCards } from '@/components/Card';
import Loader from '@/components/Loader';
import NoFeeds from '@/components/NoFeeds';

const Home = () => {
  const { feeds, isLoading } = useShallowEqualSelector(({ feeds, auth }) => ({
    feeds: feeds.feeds,
    isLoading: auth.loading
  }));

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
      <Loader display={isLoading} />
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
