import { createAction } from "redux-actions";

export const trigger = createAction("updateFormLoading->TRIGGER");
export const start = createAction("updateFormLoading->START");
export const success = createAction("updateFormLoading->SUCCESS");
export const failure = createAction("updateFormLoading->FAILURE");
