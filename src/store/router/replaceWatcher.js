import { takeEvery, put } from "redux-saga/effects";
import { replace } from "connected-react-router";
import { replaceTrigger } from "./actions";

function* replaceWorker(action) {
  yield put(replace(action.payload.path));
}

export function* replaceWatcher() {
  yield takeEvery(replaceTrigger.toString(), replaceWorker);
}
