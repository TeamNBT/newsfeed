import supabase, { VITE_SUPABASE_URL } from '@/supabase/supabaseClient';
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

export const updateUser = async (data, thunkAPI) => {
  const result = await processAuth('updateUser', thunkAPI, data);
  return result;
};

export const uploadAvatarImage = async (blob, thunkAPI) => {
  try {
    const { data, error } = await supabase.storage
      .from('images')
      .upload(`avatar/${Date.now()}`, blob);

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    const imageUrl = `${VITE_SUPABASE_URL}/storage/v1/object/public/images/${data.path}`;

    return {
      imageUrl,
      error
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
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
