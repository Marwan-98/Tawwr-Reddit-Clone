import { AxiosResponse } from "axios";

export const tags = (
  state = [],
  action: { type: string; payload: AxiosResponse<any, any> }
) => {
  switch (action.type) {
    case "GET_TAGS":
      return action.payload;
    default:
      return state;
  }
};

export default tags
