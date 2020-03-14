import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";

function* requestsScreenWorker() {
  console.log("Watcher start");

  yield put(actions.start());

  try {
    const [resTasks, resStatus] = yield all([
      call(
        fetch,
        `http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=9ba5d123-5cd6-4d32-b63b-1a058343ff9e`
      ),
      call(
        fetch,
        `http://intravision-task.test01.intravision.ru/api/9ba5d123-5cd6-4d32-b63b-1a058343ff9e/Statuses`
      )
    ]);

    const statusTasks = resTasks.status;
    const dataTasks = yield call([resTasks, resTasks.json]);
    const tasks = yield dataTasks.value;

    const statusStat = resStatus.status;
    const statuses = yield call([resStatus, resStatus.json]);

    if (statusTasks === 200 && statusStat === 200) {
      yield put(
        actions.success({ loading: false, requestList: tasks, statuses })
      );
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
