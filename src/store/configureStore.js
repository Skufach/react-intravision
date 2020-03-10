import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import { createRootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

export const history = createBrowserHistory();

export const configureStore = () => {
  const composeEnchancers =
    (process.env.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = createStore(
    createRootReducer(history),
    composeEnchancers(
      applyMiddleware(routerMiddleware(history), ...middlewares)
    )
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
