import { createAction } from "redux-actions";

export const trigger = createAction("updateForm->TRIGGER");
export const start = createAction("updateForm->START");
export const success = createAction("updateForm->SUCCESS");
export const failure = createAction("updateForm->FAILURE");
