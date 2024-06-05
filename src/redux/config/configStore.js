import { configureStore } from '@reduxjs/toolkit';
import authSlices from '../auth/authSlices';
import feedsSlices from '../slices/feedsSlices';

const store = configureStore({
  reducer: {
    feeds: feedsSlices,
    auth: authSlices
  }
});

export default store;
