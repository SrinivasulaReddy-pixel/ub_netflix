import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { rootReducer } from './slice'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
})
sagaMiddleware.run(rootSaga)
export default store
