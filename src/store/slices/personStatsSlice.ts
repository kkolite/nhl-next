import { APIPersonStat } from '@/API/Player';
import { ESort, IPersonStat } from '@/data/types';
import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';

interface IState {
  stats: IPersonStat[] | null;
  isLoading: boolean;
  error: string;
  sortUp: boolean;
  active: ESort | null;
  origin: IPersonStat[] | null;
}

const initialState: IState = {
  stats: null,
  isLoading: false,
  error: '',
  sortUp: true,
  active: null,
  origin: null
};

export const fetchPersonStats = createAsyncThunk('personStats/fetchCards', async (id: number) => {
  const res = await APIPersonStat(id);  
  return res;
});

const personStatsSlice = createSlice({
  name: 'personStats',
  initialState,
  reducers: {
    sort(state, action: PayloadAction<ESort>) {
      if (!state.stats) return;
      state.active = action.payload;
      state.stats = state.sortUp 
        ? state.stats.sort((a,b) => a.stat[action.payload] - b.stat[action.payload])
        : state.stats.sort((a,b) => b.stat[action.payload] - a.stat[action.payload])
      state.sortUp = !state.sortUp;
    },

    sortBySeason(state) {
      if (!state.stats || !state.origin) return;
      state.stats = state.origin.reverse();
      state.active = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPersonStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
        state.origin = action.payload;
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

export default personStatsSlice.reducer;

export const { sort, sortBySeason } = personStatsSlice.actions
