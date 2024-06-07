import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card } from '@/components/Card';
import NoFeeds from '@/components/NoFeeds';
import supabase from '@/supabase/supabaseClient';

const Favorites = () => {
  const userId = useSelector((state) => state.auth.data.userId);
  const [favoriteFeeds, setFavoriteFeeds] = useState([]);

  const handleRemove = (feedId) => {
    setFavoriteFeeds(favoriteFeeds.filter((feed) => feed.id !== feedId));
  };

  useEffect(() => {
    if (!userId) {
      return console.error('유효하지 않은 userId:', userId);
    }

    const fetchFavoriteFeeds = async () => {
      try {
        const { data: favoriteData, error: favoriteError } = await supabase
          .from('favorites')
          .select('feedIds')
          .eq('author', userId);

        if (favoriteError) throw new Error(`즐겨찾기 fetch 에러: ${favoriteError.message}`);

        const feedIds = favoriteData.map((fav) => fav.feedIds);
        const { data: feedData, error: feedError } = await supabase
          .from('feeds')
          .select('*')
          .in('id', feedIds);

        if (feedError) throw new Error(`피드 fetch 에러: ${feedError.message}`);

        setFavoriteFeeds(feedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavoriteFeeds();
  }, [userId]);

  if (!favoriteFeeds.length) {
    return <NoFeeds />;
  }

  return (
    <StCards>
      {favoriteFeeds.map((feed) => (
        <Card key={feed.id} feed={feed} onRemove={handleRemove} />
      ))}
    </StCards>
  );
};

const StCards = styled.section`
  display: grid;
  gap: 32px 16px;
  grid-template-columns: 1fr 1fr;
`;

export default Favorites;
