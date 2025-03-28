import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "../slices/authSlice";
import { loginApi } from "../../api/authApi";

function* loginSaga(action) {
  try {
    const user = yield call(loginApi, action.payload);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchAuthSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}
