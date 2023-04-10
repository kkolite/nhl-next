import { EOption } from '@/data/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICardsState {
  current: EOption;
}

const initialState: ICardsState = {
  current: EOption.ROSTER,
};

const rosterSlice = createSlice({
  name: 'roster',
  initialState,
  reducers: {
    setOption(state, action: PayloadAction<EOption>) {
      state.current = action.payload;
    },
  },
});

export const { setOption } = rosterSlice.actions;

export default rosterSlice.reducer;
