import { all, fork } from "redux-saga/effects";

import { requestsScreenWatcher } from "./requestsScreen/sagas";
import { createFormWatcher } from "./forms/createForm/sagas";
import { updateFormLoadingWatcher } from "./router/updateFormLoading/sagas";

const watchers = [
  requestsScreenWatcher,
  createFormWatcher,
  updateFormLoadingWatcher
];

export function* rootSaga() {
  yield all(watchers.map(fork));
}
