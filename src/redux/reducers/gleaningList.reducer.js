const gleaningListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_GLEANING_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default gleaningListReducer;
