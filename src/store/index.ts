import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './franchisesSlice';
import rosterReducer from './rosterSlice';
import teamSettingReducer from './teamSettingSlice';
import statsReducer from './statsSlice'

const store = configureStore({
  reducer: {
    cards: cardReducer,
    roster: rosterReducer,
    stats: statsReducer,
    teamSetting: teamSettingReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
