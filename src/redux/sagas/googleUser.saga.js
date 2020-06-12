// import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* setGoogleUserInfo(action) {
  try {
    const userGoogleInfo = action.payload;
    yield put({ type: "STORE_USER_GOOGLE_INFO", payload: userGoogleInfo });
  } catch (error) {
    console.log("Setting google user info failed", error);
  }
}

function* resetGoogleUserInfo(action) {
  try {
    yield put({ type: "EMPTY_USER_GOOGLE_INFO" });
  } catch (error) {
    console.log("Resetting google user info failed", error);
  }
}

function* googleUserSaga() {
  yield takeLatest("SET_USER_GOOGLE_INFO", setGoogleUserInfo);
  yield takeLatest("RESET_USER_GOOGLE_INFO", resetGoogleUserInfo);
}

export default googleUserSaga;
