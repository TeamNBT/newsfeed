import { useState } from 'react';
import styled from 'styled-components';

const Card = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <CardBox>
      <div className="-Card">
        <div className="image-23"></div>
        <header>
          <div className="Typo-Group-HStack">
            <span className="prm-text">Sqruce</span>
            <div className="Rectangle-23"></div>
            <span className="scd-text">mari</span>
          </div>
          <button onClick={() => setIsLiked((prev) => !prev)}>
            <img
              src={
                isLiked
                  ? 'src/assets/images/common/ic_general_like_fill.svg'
                  : 'src/assets/images/common/ic_general_like.svg'
              }
            ></img>
          </button>
        </header>
      </div>
    </CardBox>
  );
};

export const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 16px;
`;

const CardBox = styled.div`
  .-Card {
    width: 520px;
    height: 343.4px;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 22px;
    padding: 0;
  }
`;

export default Card;
