import { createAction } from "redux-actions";

export const trigger = createAction("requestScreen->TRIGGER");
export const start = createAction("requestScreen->START");
export const success = createAction(
  "requestScreen->SUCCESS",
  ({ loading, requestList, statuses, users }) => ({
    loading,
    requestList,
    statuses,
    users
  })
);
export const failure = createAction("requestScreen->FAILURE", ({ error }) => ({
  error
}));

export const item = createAction("requestScreen->ITEM", ({ updateItem }) => ({
  updateItem
}));
