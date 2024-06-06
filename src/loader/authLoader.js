import { initAuth } from '@/redux/auth/authSlices';
import store from '@/redux/config/configStore';

const authLoader = () => {
  store.dispatch(initAuth());

  return null;
};

export default authLoader;
