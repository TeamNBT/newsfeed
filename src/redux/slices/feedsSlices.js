import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feeds: []
};

const feedsSlices = createSlice({
  name: 'feeds',
  initialState,
  reducers: {}
});

export const {} = feedsSlices.actions;
export default feedsSlices.reducer;
