import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFeeds, createFeed, updateFeed, deleteFeed } from '../../supabase/supabaseService';

// !! createAsyncThunk는 비동기 작업을 처리하는 액션을 만들어줌
// reducers를 사용하면 액션크리에이터를 툴킷이 자동으로 만들어주지만,
// 비동기 작업은 액션크리에이터를 자동으로 만들지 못해 extraReducers만들어 안에서 처리함

// createAsyncThunk - 두개의 파라미터 필요 (액션 타입, 실제 실행될 함수)

// 게시물 가져오기 feeds
export const loadFeeds = createAsyncThunk('feeds/loadFeeds', async () => {
  const feeds = await fetchFeeds(); // feeds 화면 렌더링 (id, content, title)
  return feeds;
});

// 게시물 추가
export const addNewFeed = createAsyncThunk('feeds/addNewFeed', async (feed) => {
  const newFeed = await createFeed(feed);
  return newFeed;
});

// 게시물 수정
export const updateExistingFeed = createAsyncThunk(
  'feeds/updateExistingFeed',
  async ({ id, updates }) => {
    const updatedFeed = await updateFeed(id, updates);
    return updatedFeed;
  }
);

// 게시물 삭제
export const deleteExistingFeed = createAsyncThunk('feeds/deleteExistingFeed', async (id) => {
  await deleteFeed(id);
  return id;
});

const initialState = {
  feeds: [],
  loading: false,
  error: null,
  editingFeed: null, // 수정할 게시물
  deletingFeedId: null, // 삭제 포스트 ID
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
      .addCase(loadFeeds.pending, (state) => {
        state.isEditorLoading = false;
        // feed데이터 로드시작
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFeeds.fulfilled, (state, action) => {
        // feed데이터 로드 성공
        state.loading = false;
        state.feeds = action.payload;
      })
      .addCase(loadFeeds.rejected, (state, action) => {
        // feed데이터 로드 실패
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(addNewFeed.fulfilled, (state, action) => {
        state.feeds = [action.payload, ...state.feeds];
        state.isEditorLoading = true;
      })
      .addCase(addNewFeed.pending, (state, action) => {
        state.isEditorLoading = false;
        state.error = action.payload;
      })
      .addCase(addNewFeed.rejected, (state, action) => {
        state.isEditorLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(updateExistingFeed.fulfilled, (state, action) => {
        state.isEditorLoading = true;
        const updatedFeed = action.payload;

        state.feeds = state.feeds.map((feed) =>
          feed.id === updatedFeed.id
            ? {
                ...feed,
                updatedFeed
              }
            : feed
        );
      })
      .addCase(updateExistingFeed.pending, (state, action) => {
        state.isEditorLoading = false;
        state.error = action.payload;
      })
      .addCase(updateExistingFeed.rejected, (state, action) => {
        state.isEditorLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteExistingFeed.pending, (state, action) => {
        console.log(action.meta.arg);
        state.deletingFeedId = action.meta.arg; // 삭제 중인 포스트 id 설정.
      })
      .addCase(deleteExistingFeed.fulfilled, (state, action) => {
        state.feeds = state.feeds.filter((feed) => feed.id !== action.payload);
        state.deletingFeedId = null; // 삭제 중인 포스트 id 초기화.
      })
      .addCase(deleteExistingFeed.rejected, (state) => {
        state.deletingFeedId = null; // 삭제 중 오류 발생시 id 초기화.
      });
  }
});

export const { setEditingFeed, initFeed } = feedsSlice.actions;
export default feedsSlice.reducer;
