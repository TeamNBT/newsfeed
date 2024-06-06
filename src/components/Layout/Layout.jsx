import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { Header } from '../Header';
import ProfileSideBar from '../ProfileSideBar';

const Layout = () => {
  return (
    <>
      <Header />
      <StLayout>
        <ProfileSideBar />
        <StSection>
          <Outlet />
        </StSection>
      </StLayout>
    </>
  );
};

const StLayout = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

const StSection = styled.section`
  flex: 1;
`;

export default Layout;
