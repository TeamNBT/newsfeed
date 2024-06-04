import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';

const Header = () => {
  const navigate = useNavigate();  
  const location = useLocation(); // 현재 경로를 가져옴

  const GoLogin = () => {
    if (location.pathname !== '/Login') { // 현재 경로가 /Login이 아닌 경우에만 이동
      navigate("/Login");
    }
  };

  return (
    <StyledHeader>
      <StyledContents>
        <StyledLink to="/">
          ✍🏻{' '}
          <StyledHeading>
            <StyleStrong>Blood</StyleStrong>folio
          </StyledHeading>
        </StyledLink>
        <Button 
          onClick={GoLogin}
          variant="secondary"
          rounded
        >
          로그인/회원가입
        </Button>
      </StyledContents>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 118px;
  background-color: var(--color-base-background);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const StyledContents = styled.div`
  max-width: var(--width-max);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const StyleStrong = styled.strong`
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  color: var(--color-white);
  height: 100%;
  display: flex;
  align-items: center;
  white-space: break-spaces;
`;

const StyledHeading = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

export default Header;
