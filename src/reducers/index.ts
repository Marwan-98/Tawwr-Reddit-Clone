import { combineReducers } from "redux";
import posts from "./posts.reducer";
import comment from "./comment.reducer";
import filter from "./filter.reducer";
import post from "./post.reducer";
import tags  from "./tags.reducer";

export default combineReducers({
  posts,
  tags,
  post,
  comment,
  filter,
});
