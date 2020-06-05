import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// salesforce Saga: will be fired on "FETCH_USER" actions
function* fetchSalesforceUser() {
  try {
    const response = yield axios.get("/api/auth/login");
    yield put({ type: "SET_SALESFORCE_USER", payload: response.data });
  } catch (error) {
    console.log("User get request failed", error);
  }
}

function* sfuserSaga() {
  yield takeLatest("FETCH_SALESFORCE_USER", fetchSalesforceUser);
}

export default sfuserSaga;
