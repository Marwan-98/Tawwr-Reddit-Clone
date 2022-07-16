import { combineReducers } from "redux";
import posts from "./posts.reducer";
import comment from "./comment.reducer";
import filter from "./filter.reducer";

export default combineReducers({
  posts,
  comment,
  filter,
});
