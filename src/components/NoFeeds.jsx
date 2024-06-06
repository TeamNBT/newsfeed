import styled from 'styled-components';
import Typography from './Typography';

const NoFeeds = () => {
  return (
    <StTypography as="p" variant="typography3">
      게시물이 없어요
      <br />내 작품을 공유해보세요
    </StTypography>
  );
};

const StTypography = styled(Typography)`
  text-align: center;
  line-height: 1.4;
  padding: 100px 0;
`;

export default NoFeeds;
