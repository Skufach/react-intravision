import { all, fork } from "redux-saga/effects";

import { requestScreenWatcher } from "./requestScreen/sagas";

const watchers = [requestScreenWatcher];

export function* rootSaga() {
  yield all(watchers.map(fork));
}
