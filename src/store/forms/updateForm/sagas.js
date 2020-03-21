import { takeEvery, put, call, select } from "redux-saga/effects";
import { replace } from "connected-react-router";

import * as actions from "./actions";
import { trigger as requestScreenTrigger } from "../../requestsScreen/actions";
import { getExecutor, getStatus } from "./selectors";
import { getUpdateItem } from "../../requestsScreen/selectors";
import { replaceTrigger } from "../../router/actions";

function* updateFormWorker() {
  yield put(actions.start());

  const item = yield select(getUpdateItem);
  const id = yield item.id;
  const executorId = yield select(getExecutor);
  const statusId = yield select(getStatus);

  try {
    const res = yield call(() =>
      fetch(
        "http://intravision-task.test01.intravision.ru/api/9ba5d123-5cd6-4d32-b63b-1a058343ff9e/Tasks",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify({
            id,
            executorId: executorId,
            statusId: statusId
          })
        }
      )
    );
    console.log(res);

    const { status } = res;
    console.log(status);
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

export function* updateFormWatcher() {
  yield takeEvery(actions.trigger.toString(), updateFormWorker);
}
