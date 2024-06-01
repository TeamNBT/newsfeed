import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './Header';
import ProfileSidebar from './ProfileSidebar';

const Layout = () => {
  return (
    <main>
      <StyledLayout>
        <Header />
        <StyledDivider />
        <ProfileSidebar />
        {Outlet}
      </StyledLayout>
    </main>
  );
};

const StyledLayout = styled.div`
  width: 1400px;
  margin: 24px auto 0;
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 24px;
`;

export default Layout;
