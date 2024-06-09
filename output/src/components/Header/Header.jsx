import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderButtons from './HeaderButtons';

const Header = () => {
  return (
    <StHeader>
      <StContents>
        <StLink to="/">
          ✍🏻{' '}
          <StHeading>
            <StStrong>Blood</StStrong>folio
          </StHeading>
        </StLink>
        <HeaderButtons />
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
  font-size: 22px;
`;

const StHeading = styled.h1`
  font-size: inherit;
  font-weight: 300;
`;

export default Header;
