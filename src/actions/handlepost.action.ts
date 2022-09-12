import { Post } from "../utils/typs";

export const handlePost = (post: Post | null) => {
    return {
      type: "GET_POST",
      payload: post
    }
  }