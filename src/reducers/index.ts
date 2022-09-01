import { combineReducers } from "redux";
import posts from "./posts.reducer";
import comment from "./comment.reducer";
import filter from "./filter.reducer";
import post from "./post.reducer"

export default combineReducers({
  posts,
  post,
  comment,
  filter,
});
