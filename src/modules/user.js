import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import data from "../lib/data";

const [
  USERS_LIST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAILURE,
] = createRequestActionTypes("user/LIST_USERS");
export const usersListRequest = createAction(USERS_LIST);
const [
  USER_LIST,
  // USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
] = createRequestActionTypes("user/LIST_USER");
export const userListRequest = createAction(USER_LIST, (findUser) => findUser);

const usersListSaga = createRequestSaga(USERS_LIST, data);
// const userListSaga = createRequestSaga(USER_LIST);
export function* userSaga() {
  yield takeLatest(USERS_LIST, usersListSaga);
  // yield takeLatest(USER_LIST, userListSaga);
}

const initialState = {
  users: null,
  userError: null,
  user: null,
};

const authReducer = handleActions(
  {
    [USERS_LIST_SUCCESS]: (state, { payload: users }) => ({
      ...state,
      userError: null,
      users,
    }),
    [USERS_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userError: error,
    }),
    [USER_LIST]: (state, { payload: user }) => ({
      ...state,
      userError: null,
      user,
    }),
    [USER_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userError: error,
    }),
  },
  initialState
);

export default authReducer;
