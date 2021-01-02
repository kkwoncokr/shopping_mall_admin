import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import data from "../lib/data";

const [
  USER_LIST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
] = createRequestActionTypes("user/LIST_USER");

export const userListRequest = createAction(USER_LIST);

const userListSaga = createRequestSaga(USER_LIST, data);
export function* userSaga() {
  yield takeLatest(USER_LIST, userListSaga);
}

const initialState = {
  user: "null",
  userError: "null",
};

const authReducer = handleActions(
  {
    [USER_LIST_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      userError: null,
      user,
    }),
    [USER_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default authReducer;
