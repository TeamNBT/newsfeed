import store from '@/redux/_config/configStore';
import { initFeed } from '@/redux/feeds/feedsSlices';

const newEditorLoader = () => {
  store.dispatch(initFeed());

  return null;
};

export default newEditorLoader;
