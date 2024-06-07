import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ellipsisStyle } from '@/styles/utils';
import { GeneralLikeFillIcon, GeneralLikeIcon } from '@/svg';
import { handleAddFavorite } from '@/redux/auth/authThunk';
import supabase from '@/supabase/supabaseClient';

const Card = ({ feed, onRemove }) => {
  const userId = useSelector((state) => state.auth.data?.userId);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const liked = () => {
    setIsLiked(!isLiked);
    dispatch(handleAddFavorite({ feedId: feed.id, userId, isLiked }));
    if (isLiked && onRemove) {
      onRemove(feed.id);
    }
  };

  useEffect(() => {
    if (!userId) return;

    const fetchFavoriteStatus = async () => {
      const { data, error } = await supabase
        .from('favorites')
        .select('feedIds')
        .eq('author', userId)
        .single();

      if (error) {
        console.log('error =>', error.message);
      }

      if (data && data.feedIds.includes(feed.id)) {
        setIsLiked(!isLiked);
      }
    };

    fetchFavoriteStatus();
  }, [userId]);

  return (
    <StCard>
      <StLink to={`/detail/${feed.id}`}>
        <StImgBox>
          <StImg src={feed.thumbnail} />
        </StImgBox>
      </StLink>
      <StHeader>
        <StLink to={`/detail/${feed.id}`}>
          <StTypoGroupHStack>
            <StTitle>{feed.title}</StTitle>
            <StDivideBar />
            <StAuthor>{feed.author}</StAuthor>
          </StTypoGroupHStack>
        </StLink>
        <StLikeButton>
          {isLiked ? <GeneralLikeFillIcon onClick={liked} /> : <GeneralLikeIcon onClick={liked} />}
        </StLikeButton>
      </StHeader>
    </StCard>
  );
};

const StCards = styled.section`
  display: grid;
  gap: 32px 16px;
  grid-template-columns: 1fr 1fr;
`;

const StTypoGroupHStack = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 9px;
`;

const StCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const StLink = styled(Link)`
  display: block;
`;

const StTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #ffffff;
  ${ellipsisStyle(1)};
`;

const StAuthor = styled.span`
  font-size: 16px;
  line-height: 1.4;
  color: #999999;
  flex-shrink: 0;
  max-width: 150px;
  ${ellipsisStyle(1)};
`;

const StImgBox = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

const StImg = styled.img`
  width: 100%;
  background-color: white;
  aspect-ratio: 1 / 0.66;
  object-fit: cover;
  display: block;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 22px;
  align-items: center;
`;

const StLikeButton = styled.button`
  width: 24px;
  height: 24px;
`;

const StDivideBar = styled.div`
  width: 1px;
  height: 16px;
  flex-grow: 0;
  background-color: rgba(217, 217, 217, 0.8);
`;

export { Card, StCards };
