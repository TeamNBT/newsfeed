import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';

const Header = () => {
  return (
    <StyledHeader>
      <StyledContents>
        <StyledLink href="/">
          ✍🏻{' '}
          <StyledHeading>
            <StyleStrong>Blood</StyleStrong>folio
          </StyledHeading>
        </StyledLink>
        <Button variant="secondary" rounded>
          로그인/회원가입
        </Button>
      </StyledContents>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 70px;
  background-color: var(--color-base-background);
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
