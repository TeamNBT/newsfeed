import store from '@/redux/_config/configStore';
import { initAuth } from '@/redux/auth/authSlices';

const authLoader = () => {
  store.dispatch(initAuth());

  return null;
};

export default authLoader;
