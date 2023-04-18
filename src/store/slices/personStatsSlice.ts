import { APIPersonStat } from '@/API/Player';
import { IPersonStat } from '@/data/types';
import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';

interface IState {
  stats: IPersonStat[] | null;
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  stats: null,
  isLoading: false,
  error: '',
};

export const fetchPersonStats = createAsyncThunk('personStats/fetchCards', async (id: number) => {
  const res = await APIPersonStat(id);  
  return res;
});

const personStatsSlice = createSlice({
  name: 'personStats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPersonStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
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
