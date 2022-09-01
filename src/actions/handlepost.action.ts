import { AxiosResponse } from "axios";

export const handlePost = (post: AxiosResponse<any, any>) => {
    return {
      type: "GET_POST",
      payload: post
    }
  }