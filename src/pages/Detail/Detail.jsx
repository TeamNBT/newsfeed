import styled from 'styled-components';
import Comment from './Comment';

const userPosts = {
  main: 'Sqruce',
  name: 'mari',
  img: 'https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288733&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjE5X251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006',
  text: '내용입니다 안녕하세요안녕하세요 안녕하세요 안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요'
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
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const StTitleBox = styled.div`
  display: flex;
  gap: 9px;
`;

const StTitleText = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 9px;
`;

const StTitle = styled.span`
  font-size: 20px;
  color: var(--color-white);
`;

const StSubTitle = styled.span`
  font-size: 16px;
  color: var(--color-foreground);
`;

const StBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StShare = styled.button`
  background-image: url('src/assets/images/common/detail/share.svg');
  width: 18px;
  height: 18px;
`;

const StBookMark = styled.button`
  background-image: url('src/assets/images/common/detail/bookmark.svg');
  width: 24px;
  height: 24px;
`;

const StDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const MainImg = styled.img`
  width: 100%;
  margin: auto;
`;

const PostsText = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 1.4;
  color: var(--color-foreground);
  word-break: break-all;
`;

export default Detail;
