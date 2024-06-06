import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';

const AuthHeader = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <StHeaderInner>
        <Button variant="secondary" rounded onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
      </StHeaderInner>
    </StHeader>
  );
};

const StHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
`;

const StHeaderInner = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export default AuthHeader;
