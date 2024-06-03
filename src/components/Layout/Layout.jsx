import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from '../Header';
import ProfileSidebar from './ProfileSidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <StLayout>
        <ProfileSidebar />
        <StSection>
          <Outlet />
        </StSection>
      </StLayout>
    </>
  );
};

const StLayout = styled.main`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
`;

const StSection = styled.section`
  flex: 1;
`;

export default Layout;
