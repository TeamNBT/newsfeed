import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ellipsisStyle } from '@/styles/utils';

const Card = ({ feed }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <StCard>
      <StLink to={`/detail/${feed.id}`}>
        <StImgBox>
          <StImg src={feed.thumbnail} />
        </StImgBox>
        <StHeader>
          <StTypoGroupHStack>
            <StTitle>{feed.title}</StTitle>
            <StDivideBar />
            <StAuthor>{feed.author}</StAuthor>
          </StTypoGroupHStack>
          <StLikeButton onClick={() => setIsLiked((prev) => !prev)}>
            <StLikeImg
              src={
                isLiked
                  ? 'src/assets/images/common/ic_general_like_fill.svg'
                  : 'src/assets/images/common/ic_general_like.svg'
              }
            ></StLikeImg>
          </StLikeButton>
        </StHeader>
      </StLink>
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
`;

const StLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 22px;
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

const StLikeImg = styled.img`
  width: 24px;
  height: 24px;
  flex-grow: 0;
  object-fit: contain;
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
