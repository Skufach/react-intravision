import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";

function* requestsScreenWorker() {
  console.log("Watcher start");

  yield put(actions.start());

  try {
    const res = yield call(
      fetch,
      `http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=9ba5d123-5cd6-4d32-b63b-1a058343ff9e`
    );

    const { status } = res;
    const data = yield call([res, res.json]);
    const values = yield data.value;

    if (status === 200) {
      yield put(actions.success({ loading: false, requestList: values }));
    } else {
      yield put(actions.failure({ error: "Ошибка" }));
    }
  } catch (e) {
    console.warn(e);
    yield put(actions.failure({ error: "Ошибка" }));
  }
}

export function* requestsScreenWatcher() {
  yield takeEvery(actions.trigger.toString(), requestsScreenWorker);
}
