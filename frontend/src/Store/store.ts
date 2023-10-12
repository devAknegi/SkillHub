// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware:[thunk]
});

export default store;

export type RootState = ReturnType<typeof store.getState>;