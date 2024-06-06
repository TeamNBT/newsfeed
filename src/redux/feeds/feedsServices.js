import supabase, { VITE_SUPABASE_URL } from '@/supabase/supabaseClient';

export const fetchFeed = async (id, thunkAPI) => {
  try {
    const { data, error } = await supabase.from('feeds').select('*').eq('id', id);

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return data[0];
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const fetchFeeds = async (thunkAPI) => {
  try {
    const { data, error } = await supabase
      .from('feeds')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const createFeed = async (feed, thunkAPI) => {
  try {
    const { data, error } = await supabase.from('feeds').insert(feed).single();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const updateThumbnailInDatabase = async (imageUrl, thunkAPI) => {
  try {
    const { data, error } = await supabase
      .from('feeds')
      .select('thumbnail')
      .insert(imageUrl)
      .single();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const updateFeed = async (id, updates, thunkAPI) => {
  try {
    const { data, error } = await supabase.from('feeds').update(updates).eq('id', id).select();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return data[0];
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const deleteFeed = async (id, thunkAPI) => {
  try {
    const { data, error } = await supabase.from('feeds').delete().eq('id', id);

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
};

export const uploadImage = async (blob, thunkAPI) => {
  try {
    const { data, error } = await supabase.storage
      .from('images')
      .upload(`public/${Date.now()}`, blob);

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    const imageUrl = `${VITE_SUPABASE_URL}/storage/v1/object/public/images/${data.path}`;

    return imageUrl;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
