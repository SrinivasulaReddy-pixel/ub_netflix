import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isFetching: false,
  data: [],
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    test: (state) => {
      state.isFetching = true
    },
    testSuccess: (state, action) => {
      state.data = action?.payload
      state.isFetching = false
    },

    testFailed: (state) => {
      state.isFetching = false
    },
  },
})

export const testAction = testSlice.actions
export default testSlice.reducer
