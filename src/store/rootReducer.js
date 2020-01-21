import { combineReducers } from "redux";

import { reducer as requestScreen } from "./requestScreen/reducer";

export const createRootReducer = combineReducers({
  request: requestScreen
});
