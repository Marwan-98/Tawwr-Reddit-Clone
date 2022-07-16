export const getaComment = (comment) => {
  return {
    type: "GET_COMMENT",
    payload: comment,
  };
};
