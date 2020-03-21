import { createAction } from "redux-actions";

export const replaceTrigger = createAction(
  "@router/replace->TRIGGER",
  ({ path }) => ({ path })
);
