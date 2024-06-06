import styled from 'styled-components';
import useIsLoginUser from '@/hooks/useIsLoginUser';
import GuestProfile from './GuestProfile';
import UserProfile from './UserProfile';

const ProfileSideBar = () => {
  const isLoginUser = useIsLoginUser();

  return <StAside>{isLoginUser ? <UserProfile /> : <GuestProfile />}</StAside>;
};

const StAside = styled.aside`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  position: sticky;
  top: 118px;
  z-index: 10;
`;

export default ProfileSideBar;
