import { takeLatest, put, select, call, delay, all } from "redux-saga/effects";
import * as actions from "./actions";

function* requestScreenWorker(action) {
  console.log('asfas')
  yield put(actions.start());

  try {
    const { res } = yield all({
      res: call(
        fetch,
        `http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=6988970d-2262-45c7-afff-7e5e7202439a`
      ),
      latency: delay(2000)
    });

    // const { status } = yield call([res, res.json]);
    const { status } = res

    console.log(res);
    console.log(status);

    if (status === 200) {
      yield put(actions.success());
    } else {
      throw new Error("error");
    }
  } catch (e) {
    console.warn(e);
    yield put(actions.failure());
  }
}

export function* requestScreenWatcher() {
  yield takeLatest(actions.trigger.toString(), requestScreenWorker);
}
