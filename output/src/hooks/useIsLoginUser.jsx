import { useSelector } from 'react-redux';

const useIsLoginUser = () => {
  const isLoginUser = useSelector(({ auth }) => auth.isLogin);
  return isLoginUser;
};

export default useIsLoginUser;
