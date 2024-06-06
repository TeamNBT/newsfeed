import { createSlice } from '@reduxjs/toolkit';
import { getUserThunk, loginUserThunk, logoutUserThunk, registerUserThunk } from './authThunk';

const initialState = {
  isLogin: false,
  data: {
    userInfo: {},
    userId: ''
  },
  loading: false,
  error: null
};

const authSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, setPending)
      .addCase(registerUserThunk.rejected, setRejected)
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });

    builder
      .addCase(loginUserThunk.pending, setPending)
      .addCase(loginUserThunk.rejected, setRejected)
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.data = action.payload;
      });

    builder
      .addCase(logoutUserThunk.pending, setPending)
      .addCase(logoutUserThunk.rejected, setRejected)
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.loading = false;
        state.isLogin = false;
        state.data = null;
      });

    builder
      .addCase(getUserThunk.pending, setPending)
      .addCase(getUserThunk.rejected, setRejected)
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.data = action.payload;
      });
  }
});

const setPending = (state) => {
  state.loading = true;
  state.error = null;
};

const setRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const { logout } = authSlices.actions;

export default authSlices.reducer;