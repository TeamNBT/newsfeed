import { createSlice } from '@reduxjs/toolkit';
import {
  createCommentThunk,
  deleteCommentThunk,
  getCommentsThunk,
  updateCommentThunk
} from './commentThunk';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const commentsSlices = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsThunk.pending, setPending)
      .addCase(getCommentsThunk.rejected, setRejected)
      .addCase(getCommentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });

    builder
      .addCase(deleteCommentThunk.pending, setPending)
      .addCase(deleteCommentThunk.rejected, setRejected)
      .addCase(deleteCommentThunk.fulfilled, (state) => {
        state.loading = false;
      });

    builder
      .addCase(createCommentThunk.pending, setPending)
      .addCase(createCommentThunk.rejected, setRejected)
      .addCase(createCommentThunk.fulfilled, (state) => {
        state.loading = false;
      });

    builder
      .addCase(updateCommentThunk.pending, setPending)
      .addCase(updateCommentThunk.rejected, setRejected)
      .addCase(updateCommentThunk.fulfilled, (state) => {
        state.loading = false;
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

export const { _ } = commentsSlices.actions;

export default commentsSlices.reducer;
