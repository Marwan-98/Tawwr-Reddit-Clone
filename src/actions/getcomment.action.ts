export const getaComment = (comment: string) => {
  return {
    type: "GET_COMMENT",
    payload: comment,
  };
};
