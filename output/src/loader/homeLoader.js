import store from '@/redux/_config/configStore';
import { loadFeedsThunk } from '@/redux/feeds/feedsThunk';

const homeLoader = async () => {
  const result = await store.dispatch(loadFeedsThunk());

  return result;
};

export default homeLoader;
