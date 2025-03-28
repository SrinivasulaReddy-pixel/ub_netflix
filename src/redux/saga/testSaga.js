import { call, put, takeEvery } from 'redux-saga/effects'
import { testAction } from '../slice/testSlice'
import { API } from '../../service/api-list'

function* workOnTest({ payload }) {
  try {
    const response = yield call(API.getTest, payload)

    if (response.status === 200) {
      yield put(testAction.testSuccess(response?.data?.data))
    } else {
      yield put(testAction.testFailed())
    }
  } catch (error) {
    yield put(testAction.testFailed())
  }
}

function* testSaga() {
  yield takeEvery(testAction.test, workOnTest)
}
export default testSaga
