const googleUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_USER_GOOGLE_INFO":
      return action.payload;
    case "EMPTY_USER_GOOGLE_INFO":
      return {};
    default:
      return state;
  }
};

export default googleUserReducer;
