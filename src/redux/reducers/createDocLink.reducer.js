const createDocLinkReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_DOCS_LINK":
      return action.payload;
    default:
      return state;
  }
};

export default createDocLinkReducer;
