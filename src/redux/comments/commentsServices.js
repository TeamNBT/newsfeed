import supabase from '@/supabase/supabaseClient';

export const getComments = async (feedId, thunkAPI) => {
  try {
    const result = await supabase
      .from('comments')
      .select('*')
      .eq('feed_id', feedId)
      .order('created_at', { ascending: true });
    if (result.error) {
      return thunkAPI.rejectWithValue(result.error);
    }
    return result.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const deleteComment = async (commentId, thunkAPI) => {
  try {
    const result = await supabase.from('comments').delete().eq('id', commentId);
    if (result.error) {
      return thunkAPI.rejectWithValue(result.error);
    }
    return result;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const createComment = async (content, thunkAPI) => {
  try {
    const result = await supabase.from('comments').insert(content).select();

    if (result.error) {
      return thunkAPI.rejectWithValue(result.error);
    }
    return result;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const updateComment = async ({ content, id }, thunkAPI) => {
  try {
    const result = await supabase.from('comments').update({ content }).eq('id', id);

    if (result.error) {
      return thunkAPI.rejectWithValue(result.error);
    }
    return result;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};
