import { put } from "redux-saga/effects";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};
export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    // console.debug(request);

    try {
      // yield delay(1000);
      action = request;
      // const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: action,
        meta: action,
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
