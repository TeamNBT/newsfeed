import { configureStore } from '@reduxjs/toolkit';
import feedsSlices from '../slices/feedsSlices';
import userSlices from '../slices/userSlices';

const store = configureStore({
  reducer: {
    feeds: feedsSlices,
    user: userSlices
  }
});

export default store;
