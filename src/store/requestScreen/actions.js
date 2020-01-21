import { createAction } from "redux-actions";

export const trigger = createAction("requestScreen->TRIGGER");
export const start = createAction("requestScreen->START");
export const success = createAction("requestScreen->SUCCESS");
export const failure = createAction("requestScreen->FAILURE");
