import { AxiosResponse } from "axios";

export const post = (
  state = {},
  action: { type: string; payload: AxiosResponse<any, any> }
) => {
  switch (action.type) {
    case "GET_POST":
      return action.payload;
    default:
      return state;
  }
};

export default post;
