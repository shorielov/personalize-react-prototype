import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer from './reducer';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
 });

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
