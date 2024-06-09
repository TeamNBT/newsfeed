import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card } from '@/components/Card';
import NoFeeds from '@/components/NoFeeds';
import supabase from '@/supabase/supabaseClient';

const Profile = () => {
  const userId = useSelector((state) => state.auth.data.userId);

  const [myFeeds, setMyFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const { data, error } = await supabase.from('feeds').select('*');

      if (error) throw new Error(`피드 fetch 에러: ${error.message}`);
      setMyFeeds(data.filter((data) => data.user_id === userId));
    };

    fetchFeeds();
  }, [userId]);

  if (!myFeeds.length) {
    return <NoFeeds />;
  }

  return (
    <StCards>
      {myFeeds.map((feed) => (
        <Card key={feed.id} feed={feed} />
      ))}
    </StCards>
  );
};

const StCards = styled.section`
  display: grid;
  gap: 32px 16px;
  grid-template-columns: 1fr 1fr;
`;

export default Profile;
