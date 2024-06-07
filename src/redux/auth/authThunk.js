import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithPassword, signUp, logout, getUser, updateUser } from './authServices';

export const registerUserThunk = createAsyncThunk(
  'auth/signup',
  async ({ email, password, ...data }, thunkAPI) => {
    return signUp({ email, password, options: { data } }, thunkAPI);
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    return signInWithPassword({ email, password }, thunkAPI);
  }
);

export const updateUserThunk = createAsyncThunk('auth/updateUser', async (data, thunkAPI) => {
  return updateUser(data, thunkAPI);
});

export const logoutUserThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  return logout(thunkAPI);
});

export const getUserThunk = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  return getUser(thunkAPI);
});
