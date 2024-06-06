import store from '@/redux/_config/configStore';
import { getCommentsThunk } from '@/redux/comments/commentThunk';
import { loadFeedThunk } from '@/redux/feeds/feedsThunk';

const detailLoader = ({ params }) => {
  store.dispatch(loadFeedThunk(params.id));
  store.dispatch(getCommentsThunk(params.id));

  return null;
};

export default detailLoader;
