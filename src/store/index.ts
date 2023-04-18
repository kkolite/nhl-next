import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/franchisesSlice';
import rosterReducer from './slices/rosterSlice';
import teamSettingReducer from './slices/teamSettingSlice';
import statsReducer from './slices/statsSlice';
import scheduleReducer from './slices/scheduleSlice';
import personStatsReducer from './slices/personStatsSlice'

const store = configureStore({
  reducer: {
    cards: cardReducer,
    roster: rosterReducer,
    stats: statsReducer,
    personStats: personStatsReducer,
    schedule: scheduleReducer,
    teamSetting: teamSettingReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
