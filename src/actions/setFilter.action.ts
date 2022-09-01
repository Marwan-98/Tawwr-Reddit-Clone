export const setFilter = (text: string) => {
  return {
    type: "SET_FILTER",
    payload: text,
  };
};
