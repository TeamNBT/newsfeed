import styled from 'styled-components';
import Comment from './Comment';

const userPosts = {
  main: 'Sqruce',
  name: 'mari',
  img: 'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288733&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjE5X251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006',
  text: '내용입니다.'
};

const Detail = () => {
  return (
    <StDetailPage>
      <StTitleBox>
        <StTitleText>
          <StTitle>{userPosts.main}</StTitle>
          <span>|</span>
          <StSubTitle>{userPosts.name}</StSubTitle>
        </StTitleText>
        <StBtn>
          <StShare />
          <StBookMark />
        </StBtn>
      </StTitleBox>
      <StDiv>
        <MainImg src={userPosts.img} />
        <PostsText>{userPosts.text}</PostsText>
      </StDiv>
      <Comment />
    </StDetailPage>
  );
};

const StDetailPage = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  padding: 0;
`;
const StTitleBox = styled.div`
  height: 28px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
  padding: 0;
`;

const StTitleText = styled.div`
  height: 28px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
  padding: 0;
`;

const StTitle = styled.span`
  width: 66px;
  height: 28px;
  flex-grow: 0;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: var(--color-white);
`;

const StSubTitle = styled.span`
  width: 31px;
  height: 22px;
  flex-grow: 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: var(--color-foreground);
`;

const StBtn = styled.div`
  width: 58px;
  height: 24px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 0;
`;

const StShare = styled.button`
  background-image: url('src/assets/images/common/detail/share.png');
  width: 18px;
  height: 18px;
`;

const StBookMark = styled.button`
  background-image: url('src/assets/images/common/detail/bookmark.png');
  width: 24px;
  height: 24px;
`;
const StDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  padding: 0;
`;

const MainImg = styled.img`
  width: 100%;
  margin: auto;
  align-self: stretch;
  flex-grow: 0;
`;

const PostsText = styled.p`
  flex-grow: 1;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: var(--color-foreground);
`;

export default Detail;
