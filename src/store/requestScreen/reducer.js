import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
  loading: false,
  requestList: [],
  error: null
};

export const reducer = handleActions(
  {
    [actions.start]: (state) => ({ ...state, loading: true, error: null }),
    [actions.success]: (state, action) => ({
      ...state,
      loading: false,
      error: null,
      requestList: action.payload.requestList
    }),
    [actions.failure]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error
    })
  },
  initialState
);
