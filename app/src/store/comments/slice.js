import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // payload: Comment Object
    post: (state, { payload }) => {
      state.list = [payload, ...state.list];
    },
    // paylaod: Array
    setList(state, { payload }) {
      state.list = payload;
    },
    deleteAll: (state) => {
      state.list = [];
    },
    setStatus(state, { payload }) {
      state.status = payload;
    },
    setError(state, { payload }) {
      state.error = payload;
    },
  },
});

export default commentsSlice.reducer;

export const { post, setList, deleteAll, setStatus, setError } = commentsSlice.actions;
