import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
  loading: false,
  requestList: [],
  error: false,
  updateItem: {}
};

export const reducer = handleActions(
  {
    [actions.start]: state => ({ ...state, loading: true }),
    [actions.success]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [actions.failure]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [actions.item]: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  initialState
);
