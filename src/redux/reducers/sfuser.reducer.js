const sfuserReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_SALESFORCE_USER":
      return action.payload;
    default:
      return state;
  }
};

export default sfuserReducer;
