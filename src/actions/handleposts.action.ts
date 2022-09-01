import { AxiosResponse } from "axios";

export const handlePosts = (posts: AxiosResponse<any, any>) => {
  return {
    type: "GET_POSTS",
    payload: posts,
  };
};
