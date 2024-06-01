import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './Header';
import ProfileSidebar from './ProfileSidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <StyledLayout>
        <ProfileSidebar />
        <Outlet />
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.main`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
`;

export default Layout;
