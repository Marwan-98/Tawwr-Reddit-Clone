export const comments = (
  state = "",
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "GET_COMMENT":
      return action.payload;
    default:
      return state;
  }
};

export default comments;
