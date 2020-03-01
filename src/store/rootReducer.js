import { combineReducers } from "redux";

import { reducer as requestScreen } from "./requestsScreen/reducer";

export const createRootReducer = combineReducers({
  request: requestScreen
});
