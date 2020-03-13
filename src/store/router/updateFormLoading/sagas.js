import { takeEvery, put, call, select } from "redux-saga/effects";
import { replace } from "connected-react-router";

import * as actions from "./actions";
import { item } from "../../requestsScreen/actions";

function* updateFormLoadingWorker(action) {
  const id = action.payload;

  yield put(actions.start());

  try {
    const res = yield call(
      fetch,
      `http://intravision-task.test01.intravision.ru/api/9ba5d123-5cd6-4d32-b63b-1a058343ff9e/Tasks/${id}`
    );

    const { status } = res;
    const data = yield call([res, res.json]);

    if (status === 200) {
      yield put(item({ updateItem: data }));
      yield put(actions.success());
      yield put(replace("/requests/update"));
    } else {
      yield put(actions.failure());
      console.log("Ошибка");
    }
  } catch (e) {
    console.warn(e);
    // yield put(actions.failure({ error: "Ошибка" }));
  }

  //   yield put(actions.success());
  //   yield put(replace("/requests"));
  //   yield put(requestScreenTrigger());
}

export function* updateFormLoadingWatcher() {
  yield takeEvery(actions.trigger.toString(), updateFormLoadingWorker);
}
