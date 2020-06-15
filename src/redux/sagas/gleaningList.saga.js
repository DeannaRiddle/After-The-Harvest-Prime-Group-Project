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
    yield put({
      type: "ADD_DOCS_LINK",
      payload: action.payload,
    });
  } catch (error) {
    console.log("Adding google docs link failed", error);
  }
}

function* gleaningListSaga() {
  yield takeLatest("GET_ALL_GLEANING", getGleaningListItem);
  yield takeLatest("CREATE_DOC_LINK", addGoogleDocsLink);
}

export default gleaningListSaga;
