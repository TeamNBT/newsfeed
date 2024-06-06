import { createAsyncThunk } from '@reduxjs/toolkit';
import { createComment, deleteComment, getComments, updateComment } from './commentsServices';

export const getCommentsThunk = createAsyncThunk(
  'comments/getComments',
  async (feedId, thunkAPI) => {
    return getComments(feedId, thunkAPI);
  }
);

export const deleteCommentThunk = createAsyncThunk(
  'comments/deleteComment',
  async (commentId, thunkAPI) => {
    return deleteComment(commentId, thunkAPI);
  }
);

export const createCommentThunk = createAsyncThunk(
  'comments/createComment',
  async (content, thunkAPI) => {
    return createComment(content, thunkAPI);
  }
);

export const updateCommentThunk = createAsyncThunk(
  'comments/updateComment',
  async (props, thunkAPI) => {
    return updateComment(props, thunkAPI);
  }
);
