import { combineReducers } from '@reduxjs/toolkit'
import testReducer from './testSlice'

export const rootReducer = combineReducers({
  test: testReducer,
})
