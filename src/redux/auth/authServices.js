import supabase from '@/supabase/supabaseClient';
import { translateErrorMessage } from './authError';

export const signUp = async (params, thunkAPI) => {
  const result = await processAuth('signUp', thunkAPI, params);
  return result;
};

export const signInWithPassword = async (params, thunkAPI) => {
  const result = await processAuth('signInWithPassword', thunkAPI, params);
  return result;
};

export const logout = async (thunkAPI) => {
  await processAuth('signOut', thunkAPI);
  return true;
};

export const getUser = async (thunkAPI) => {
  const result = await processAuth('getUser', thunkAPI);
  return result;
};

const processAuth = async (method, thunkAPI, params) => {
  try {
    const result = await supabase.auth[method](params);

    if (result.error) {
      return thunkAPI.rejectWithValue(translateErrorMessage(result.error));
    }
    return {
      userInfo: result.data?.user?.user_metadata,
      userId: result.data?.user?.id
    };
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
