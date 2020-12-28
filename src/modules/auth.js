import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN"
);
export const loginRequest = createAction(
  LOGIN,
  ({ email, password, admin }) => ({
    email,
    password,
    admin,
  })
);
const loginSaga = createRequestSaga(LOGIN);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
const initialState = {
  auth: {
    email: "",
    password: "",
    admin: false,
  },
  authError: null,
};

const authReducer = handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default authReducer;
