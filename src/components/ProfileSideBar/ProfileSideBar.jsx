import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GuestProfile from './GuestProfile';
import UserProfile from './UserProfile';

const ProfileSideBar = () => {
  const isLoginUser = useSelector(({ auth }) => auth.isLogin);

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
