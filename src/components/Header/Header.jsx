import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져옴

  const GoLogin = () => {
    if (location.pathname !== '/login') {
      // 현재 경로가 /Login이 아닌 경우에만 이동
      navigate('/login');
    }
  };

  return (
    <StHeader>
      <StContents>
        <StLink to="/">
          ✍🏻{' '}
          <StHeading>
            <StStrong>Blood</StStrong>folio
          </StHeading>
        </StLink>
        <Button onClick={GoLogin} variant="secondary" rounded>
          로그인/회원가입
        </Button>
      </StContents>
    </StHeader>
  );
};

const StHeader = styled.header`
  height: 118px;
  background-color: var(--color-base-background);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StContents = styled.div`
  max-width: var(--width-max);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StStrong = styled.strong`
  font-weight: 600;
`;

const StLink = styled(Link)`
  color: var(--color-white);
  height: 100%;
  display: flex;
  align-items: center;
  white-space: break-spaces;
`;

const StHeading = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

export default Header;
