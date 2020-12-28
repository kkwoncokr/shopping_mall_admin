import { put, delay } from "redux-saga/effects";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};
export default function createRequestSaga(type) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    console.debug(action.payload);
    try {
      yield delay(1000);
      //   const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: action.payload,
        meta: action.payload,
      });
    } catch (e) {
      console.debug(e);
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
  };
}
