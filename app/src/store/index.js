import { configureStore } from "@reduxjs/toolkit";
import CommentsReducer from "./comments/slice";

export default configureStore({
  reducer: {
    comments: CommentsReducer,
  },
});
