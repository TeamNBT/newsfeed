import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useIsLoginUser from '@/hooks/useIsLoginUser';
import { logoutUserThunk } from '@/redux/auth/authThunk';
import { Button } from '../Button';

const HeaderButton = () => {
  const dispatch = useDispatch();
  const isLoginUser = useIsLoginUser();

  const buttons = [
    { text: '내 프로필', isLogin: true, props: { href: '/profile' } },
    { text: '로그아웃', isLogin: true, props: { onClick: () => dispatch(logoutUserThunk()) } },
    { text: '로그인/회원가입', isLogin: false, props: { href: '/signin' } }
  ];

  return (
    <StButtons>
      {buttons
        .filter(({ isLogin }) => isLogin === isLoginUser)
        .map(({ text, props }) => (
          <Button key={text} variant="secondary" rounded {...props}>
            {text}
          </Button>
        ))}
    </StButtons>
  );
};

const StButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export default HeaderButton;
