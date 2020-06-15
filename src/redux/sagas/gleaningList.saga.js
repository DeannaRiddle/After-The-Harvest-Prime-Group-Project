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

function* addGoogleDocsLink(action) {
  try {
    const docLink = { link: action.payload };
    yield axios.put("/api/salesforce/docLink", docLink);
    yield put({ type: "GET_ALL_GLEANING" });
  } catch (error) {
    console.log("Adding google docs link failed", error);
  }
}

function* gleaningListSaga() {
  yield takeLatest("GET_ALL_GLEANING", getGleaningListItem);
  yield takeLatest("CREATE_DOC_LINK", addGoogleDocsLink);
}

export default gleaningListSaga;
