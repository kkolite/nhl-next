import { APITeamSchedule } from '@/API/Schedule';
import { IDate } from '@/data/types';
import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';

interface IScheduleState {
  schedule: IDate[];
  total: number;
  startSearch: string;
  endSearch: string;
  isLoading: boolean;
  error: string;
}

interface IThunk {
  ID: number;
  start: string;
  end: string;
}

const initialState: IScheduleState = {
  schedule: [],
  total: 0,
  startSearch: '',
  endSearch: '',
  isLoading: false,
  error: '',
};

export const fetchSchedule = createAsyncThunk('schedule/fetchSchedule', async ({ID, start, end}:IThunk) => {
  const res = await APITeamSchedule(ID, start, end);
  return res;
});

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setStart(state, action: PayloadAction<string>) {
      state.startSearch = action.payload;
    },
    setEnd(state, action: PayloadAction<string>) {
      state.endSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedule.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSchedule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.schedule = action.payload.dates;
        state.total = action.payload.totalItems;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export default scheduleSlice.reducer;

export const { setEnd, setStart } = scheduleSlice.actions;
