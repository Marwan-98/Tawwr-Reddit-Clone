import { AxiosResponse } from "axios";

export const posts = (
  state = null,
  action: { type: string; payload: AxiosResponse<any, any> }
) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default posts;
