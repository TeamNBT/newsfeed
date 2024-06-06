import { createAsyncThunk } from '@reduxjs/toolkit';
import { createFeed, deleteFeed, fetchFeed, updateFeed, uploadImage } from './feedsService';

export const loadFeedThunk = createAsyncThunk('feed/loadFeed', async (id, thunkAPI) => {
  const feed = await fetchFeed(id, thunkAPI);
  return feed;
});

export const addNewFeedThunk = createAsyncThunk('feed/addNewFeed', async (feed, thunkAPI) => {
  const newFeed = await createFeed(feed, thunkAPI);
  return newFeed;
});

export const updateExistingFeedThunk = createAsyncThunk(
  'feed/updateExistingFeed',
  async ({ id, updates }) => {
    const updatedFeed = await updateFeed(id, updates);
    return updatedFeed;
  }
);

export const deleteExistingFeedThunk = createAsyncThunk('feed/deleteExistingFeed', async (id) => {
  await deleteFeed(id);
  return id;
});

export const uploadImageThunk = createAsyncThunk('feeds/uploadImage', async (blob, thunkAPI) => {
  return await uploadImage(blob, thunkAPI);
});
