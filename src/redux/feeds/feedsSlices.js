import { createSlice } from '@reduxjs/toolkit';
import {
  addNewFeedThunk,
  deleteExistingFeedThunk,
  loadFeedThunk,
  loadFeedsThunk,
  updateExistingFeedThunk
} from '@/redux/feeds/feedsThunk';

const initialState = {
  feed: {},
  feeds: [],
  loading: false,
  error: null,
  editingFeed: null,
  deletingFeedId: null,
  isEditorLoading: false
};

const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    setEditingFeed: (state, action) => {
      state.editingFeed = action.payload;
    },
    initFeed: (state) => {
      state.editingFeed = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFeedThunk.pending, (state) => {
        state.isEditorLoading = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFeedThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.feed = action.payload;
      })
      .addCase(loadFeedThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addNewFeedThunk.fulfilled, (state) => {
        state.isEditorLoading = true;
      })
      .addCase(addNewFeedThunk.pending, (state, action) => {
        state.isEditorLoading = false;
        state.error = action.payload;
      })
      .addCase(addNewFeedThunk.rejected, (state, action) => {
        state.isEditorLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(updateExistingFeedThunk.fulfilled, (state, action) => {
        state.isEditorLoading = true;
        state.feed = action.payload;
      })
      .addCase(updateExistingFeedThunk.pending, (state, action) => {
        state.isEditorLoading = false;
        state.error = action.payload;
      })
      .addCase(updateExistingFeedThunk.rejected, (state, action) => {
        state.isEditorLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteExistingFeedThunk.pending, (state, action) => {
        state.deletingFeedId = action.meta.arg;
      })
      .addCase(deleteExistingFeedThunk.fulfilled, (state) => {
        state.deletingFeedId = null;
      })
      .addCase(deleteExistingFeedThunk.rejected, (state) => {
        state.deletingFeedId = null;
      });

    builder
      .addCase(loadFeedsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFeedsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.feeds = action.payload;
      })
      .addCase(loadFeedsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setEditingFeed, initFeed } = feedsSlice.actions;
export default feedsSlice.reducer;
