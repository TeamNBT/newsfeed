import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SectionHeaderHook from '@/pages/Home/SectionHeader';
import { Card, StCards } from '@/components/Card';
import supabase from '@/supabase/supabaseClient';

const Home = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      const { data, error } = await supabase.from('feeds').select();

      setFeeds(data);
      if (error) {
        console.log('error =>', error);
      }
    };
    fetchFeeds();
  }, []);

  console.log(feeds);
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
