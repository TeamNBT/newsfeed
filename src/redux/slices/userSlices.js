import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  data: {}
};

const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const {} = userSlices.actions;
export default userSlices.reducer;
