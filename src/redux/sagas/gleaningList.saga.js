import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getGleaningListItem(action) {
  try {
    const response = yield axios.get("api/salesforce/gleaning/list");
    console.log(response);
    yield put({
      type: "SET_GLEANING_LIST",
      payload: response.data,
    });
  } catch (error) {
    console.log("Gleaning request failed", error);
  }
}

function* gleaningListSaga() {
  yield takeLatest("GET_ALL_GLEANING", getGleaningListItem);
}

export default gleaningListSaga;
