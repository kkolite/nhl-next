import { APITeam } from '@/API/Team';
import { EOption, IStats } from '@/data/types';
import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';

interface ICardsState {
  stats: IStats | null;
  overall: IStats | null;
  isLoading: boolean;
  error: string;
}

const initialState: ICardsState = {
  stats: null,
  overall: null,
  isLoading: false,
  error: '',
};

export const fetchStats = createAsyncThunk('stats/fetchCards', async (id: number) => {
  const res = await APITeam(id, EOption.STATS);
  return res;
});

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!action.payload.teamStats) return;

        // First el of array - stat, second - overall. API...

        state.stats = action.payload.teamStats[0].splits[0].stat;
        state.overall = action.payload.teamStats[0].splits[1].stat;
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

export default statsSlice.reducer;
