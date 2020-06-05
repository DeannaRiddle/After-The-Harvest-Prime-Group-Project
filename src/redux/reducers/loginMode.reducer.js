const loginMode = (state = "loggedOut", action) => {
  switch (action.type) {
    case "SET_TO_LOGGEDIN":
      return "loggedIn";
    case "SET_TO_LOGGEDOUT":
      return "loggedOut";
    default:
      return state;
  }
};

// loginMode will be on the redux state at:
// state.loginMode
export default loginMode;
