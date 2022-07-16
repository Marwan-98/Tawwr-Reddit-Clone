export const comments = (state = "", action) => {
  switch (action.type) {
    case "GET_COMMENT":
      return action.payload;
    default:
      return state;
      break;
  }
};

export default comments;
