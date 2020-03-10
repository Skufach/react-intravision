import { createAction } from "redux-actions";

export const trigger = createAction("createForm->TRIGGER");
export const start = createAction("createForm->START");
export const success = createAction("createForm->SUCCESS");
export const failure = createAction("createForm->FAILURE");
