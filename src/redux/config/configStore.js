import { configureStore } from '@reduxjs/toolkit';
import userSlices from '../slices/userSlices';
import feedsSlices from '../slices/feedsSlices';

const store = configureStore({
  reducer: {
    feeds: feedsSlices,
    user: userSlices
  }
});

export default store;
