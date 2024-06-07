import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '@/supabase/supabaseClient';
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

export const handleAddFavorite = createAsyncThunk(
  'favorites/handleAdd',
  async ({ feedId, userId, isLiked }, { rejectWithValue }) => {
    try {
      const response = await supabase.from('favorites').select('feedIds, id').eq('author', userId);
      const { data, error } = response;

      if (error) throw new Error('즐겨찾기 fetch 에러');

      if (!data || data.length === 0) {
        if (!isLiked) return;
        const { error: insertError } = await supabase
          .from('favorites')
          .insert([{ author: userId, feedIds: [feedId] }]);
        if (insertError) throw new Error('즐겨찾기 추가 에러');
        return '즐겨찾기 추가 성공!';
      }

      const existingFavorites = data[0];
      let updatedFeedIds = existingFavorites.feedIds || [];

      if (isLiked) {
        updatedFeedIds = updatedFeedIds.filter((id) => id !== feedId);
      } else {
        if (!updatedFeedIds.includes(feedId)) {
          updatedFeedIds.push(feedId);
        }
      }

      const updateResponse = await supabase
        .from('favorites')
        .update({ feedIds: updatedFeedIds })
        .match({ id: existingFavorites.id });

      const { error: updateError } = updateResponse;
      if (updateError) throw new Error('즐겨찾기 업데이트 에러');
      return '즐겨찾기 업데이트 성공!';
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
