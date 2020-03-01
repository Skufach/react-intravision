import { all, fork } from "redux-saga/effects";

import { requestsScreenWatcher } from "./requestsScreen/sagas";

const watchers = [requestsScreenWatcher];

export function* rootSaga() {
  yield all(watchers.map(fork));
}
