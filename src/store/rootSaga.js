import { all, fork } from "redux-saga/effects";

import { requestsScreenWatcher } from "./requestsScreen/sagas";
import { createFormWatcher } from "./forms/createForm/sagas";
const watchers = [requestsScreenWatcher, createFormWatcher];

export function* rootSaga() {
  yield all(watchers.map(fork));
}
