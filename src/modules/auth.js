import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga_2";

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN"
);
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER"
);
const LOGOUT = "user/LOGOUT";

export const loginRequest = createAction(
  LOGIN,
  ({ email, password, admin }) => ({
    email,
    password,
    admin,
  })
);
export const registerRequest = createAction(
  REGISTER,
  ({ email, nickname, password, admin }) => ({
    email,
    nickname,
    password,
    admin,
  })
);
export const logout = createAction(LOGOUT);

const loginSaga = createRequestSaga(LOGIN);
const registerSaga = createRequestSaga(REGISTER);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}
const initialState = {
  auth: {
    email: "",
    password: "",
    admin: "",
  },
  register: {
    email: "",
    password: "",
    nickname: "",
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
    [REGISTER_SUCCESS]: (state, { payload: register }) => ({
      ...state,
      authError: null,
      register,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      auth: {
        email: "",
        password: "",
        admin: "",
      },
    }),
  },
  initialState
);

export default authReducer;
