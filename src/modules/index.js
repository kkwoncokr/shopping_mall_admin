import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import authReducer, { authSaga } from "./auth";
import user, { userSaga } from "./user";

const rootReducer = combineReducers({ authReducer, user });

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
