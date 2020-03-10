import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

import { reducer as requestScreen } from "./requestsScreen/reducer";

export const createRootReducer = history =>
  combineReducers({
    request: requestScreen,
    form: formReducer,
    router: connectRouter(history)
  });
