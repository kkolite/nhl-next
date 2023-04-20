import { APITeam } from '@/API/Team';
import { EOption, IPlayer, ITeam } from '@/data/types';
import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';

interface ICardsState {
  roster: IPlayer[];
  isLoading: boolean;
  error: string;
}

const initialState: ICardsState = {
  roster: [],
  isLoading: false,
  error: '',
};

export const fetchRoster = createAsyncThunk('roster/fetchCards', async (id: number) => {
  const res = await APITeam(id, EOption.ROSTER);
  return res;
});

const rosterSlice = createSlice({
  name: 'roster',
  initialState,
  reducers: {
    setRoster(state, action: PayloadAction<ITeam>) {
      if (action.payload.roster)
      state.roster = action.payload.roster.roster;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoster.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRoster.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Object.hasOwn(action.payload, 'roster')) {
          const team = action.payload as ITeam;
          if (team.roster) state.roster = team.roster.roster as IPlayer[];
        }
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

export default rosterSlice.reducer;

export const { setRoster } = rosterSlice.actions