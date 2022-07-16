export const posts = (state = null, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default posts;
