import styled from 'styled-components';
import Typography from '@/components/Typography';

const NotFound = () => {
  return (
    <StTypography as="p" variant="typography3">
      알 수 없는 이유로 페이지를 찾을 수 없어요
      <br />
      다시 접속 부탁드려요
    </StTypography>
  );
};

const StTypography = styled(Typography)`
  text-align: center;
  line-height: 1.4;
  padding: 100px 0;
`;

export default NotFound;
