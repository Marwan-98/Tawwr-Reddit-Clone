import { Post } from "../utils/typs";

export const handlePosts = (posts: Post[]) => {
  return {
    type: "GET_POSTS",
    payload: posts,
  };
};
