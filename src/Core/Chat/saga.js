import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";
import { fetchResponse, fetchResponseSuccess, fetchResponseFailure } from "./reducer";
import { readFileAsBase64 } from "../../utils";

function* sendFile(file) {
  const splittedFile = file.split(".");
  const extension = splittedFile[splittedFile.length - 1];
  const base64 = yield call(readFileAsBase64, file);
  const raw = JSON.stringify({ file: base64 });

  try {
    const response = yield call(axios.post, "https://4wduslcamg.execute-api.us-east-2.amazonaws.com/default/SpeechToGPT", raw, {
      headers: {
        "X-API-Key": "AY6EtfpzDz5sSFdtkWxgyRL1wmfXjD7aXdh8eJR3",
        "X-File-Extension": extension,
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    return error.message;
  }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchGPTResponse(action) {
  // console.log(action.payload.file, "action.payload.file");
  try {
    const data = yield call(sendFile, action.payload.file)
    yield put(fetchResponseSuccess(data));
  } catch (e) {
    console.log("ERRRRRROR");
    yield put(fetchResponseFailure(e.message));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* chatSaga() {
  yield takeLatest(fetchResponse, fetchGPTResponse)
}

export default chatSaga