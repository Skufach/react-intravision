import { all, fork } from "redux-saga/effects";

import { requestsScreenWatcher } from "./requestsScreen/sagas";
import { createFormWatcher } from "./forms/createForm/sagas";
import { updateFormWatcher } from "./forms/updateForm/sagas";
import { updateFormLoadingWatcher } from "./router/updateFormLoading/sagas";
import { replaceWatcher } from "./router/replaceWatcher";

const watchers = [
  requestsScreenWatcher,
  createFormWatcher,
  updateFormWatcher,
  updateFormLoadingWatcher,
  replaceWatcher
];

export function* rootSaga() {
  yield all(watchers.map(fork));
}
