// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

// Import any reducers you will create
import yourReducer from './yourSlice';

const store = configureStore({
  reducer: {
    yourState: yourReducer, // Add your reducers here
  },
});

export default store;
