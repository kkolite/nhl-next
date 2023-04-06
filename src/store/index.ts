import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './franchisesSlice';

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
