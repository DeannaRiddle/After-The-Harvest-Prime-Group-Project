import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// salesforce Saga: will be fired on "FETCH_USER" actions
function* fetchSalesforceUser() {
  try {
    const response = yield axios.get("/api/salesforce/auth/login");
    yield put({ type: "SET_SALESFORCE_USER", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* sfuserSaga() {
  yield takeLatest("FETCH_SALESFORCE_USER", fetchSalesforceUser);
}

function* sfLoginPush(props) {
  yield props.dispatch({ type: "SET_GLEANING_LIST" });
}

export default sfuserSaga;
