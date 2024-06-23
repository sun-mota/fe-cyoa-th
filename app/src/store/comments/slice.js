import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    list: [],
    // selected: null,
  },
  reducers: {
    // payload: Comment Object
    post: (state, { payload }) => {
      console.log(payload);
      state.list = [payload, ...state.list];
    },
    // paylaod: Array
    setList(state, { payload }) {
      state.list = payload;
    },
    deleteAll: (state) => {
      state.list = [];
    },
  },
});

export default commentsSlice.reducer;



const { post, setList, deleteAll } = commentsSlice.actions;
// API Actions
export async function fetchComments({ dispatch }) {
  const response = await fetch('/getComments')
  const json = await response.json();
  dispatch(setList(json.reverse()));
};

async function fetchComment(id) {
  const response = await fetch('/getComment/' + id)
  const json = await response.json();
  return json;
}

export async function postComment({ dispatch }, { name, message }) {
  const response = await fetch('/createComment', 
    {
      method: 'POST', body: JSON.stringify({ name, message }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
  const newComment = await fetchComment(json.id);
  dispatch(post(newComment));
};

export async function deleteComments({ dispatch }) {
  const response = await fetch('/deleteComments', { method: "DELETE" })
  if (response.status === 200) {
    dispatch(deleteAll());
  }
}