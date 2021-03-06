import { takeEvery, put, call, select } from "redux-saga/effects";

import * as actions from "./actions";
import { trigger as requestScreenTrigger } from "../../requestsScreen/actions";
import { getName, getDescription } from "./selectors";

import { replaceTrigger } from "../../router/actions";

function* createFormWorker() {
  yield put(actions.start());

  const name = yield select(getName);
  const description = yield select(getDescription);

  try {
    const res = yield call(() =>
      fetch(
        "http://intravision-task.test01.intravision.ru/api/9ba5d123-5cd6-4d32-b63b-1a058343ff9e/Tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify({ name, description })
        }
      )
    );

    const { status } = res;

    if (status === 200) {
      yield put(actions.success());
      yield put(replaceTrigger({ path: "/requests" }));
      yield put(requestScreenTrigger());
      console.log("Всё ок");
    } else {
      yield put(actions.failure());
      console.log("Всё  НЕ ок");
    }
  } catch (e) {
    console.warn(e);
  }
}

export function* createFormWatcher() {
  yield takeEvery(actions.trigger.toString(), createFormWorker);
}
