import { Franchises } from '@/API/Franchises';
import { IFranchise } from '@/data/types';
import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from '@reduxjs/toolkit';

interface ICardsState {
  cards: IFranchise[];
  isLoading: boolean;
  error: string;
}

const initialState: ICardsState = {
  cards: [],
  isLoading: false,
  error: '',
};

export const fetchFranchise = createAsyncThunk('cards/fetchCards', async () => {
  const res = await Franchises();
  return res;
});

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    /*setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setModal(state, action: PayloadAction<IPhoto>) {
      state.modal = action.payload;
    },
    setVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },*/
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFranchise.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFranchise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
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

//export const { setSearch, setModal, setVisible } = cardSlice.actions;

export default cardSlice.reducer;
