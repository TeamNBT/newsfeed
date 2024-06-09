import { configureStore } from '@reduxjs/toolkit';
import authSlices from '../auth/authSlices';
import commentsSlices from '../comments/commentsSlices';
import feedsSlices from '../feeds/feedsSlices';

const store = configureStore({
  reducer: {
    feeds: feedsSlices,
    auth: authSlices,
    comments: commentsSlices
  }
});

export default store;
