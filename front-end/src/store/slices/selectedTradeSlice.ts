import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ClosePriceItem } from "@/types";

interface SelectedTradeState {
  tradeData: ClosePriceItem | null;
}

const initialState: SelectedTradeState = {
  tradeData: null,
};

const selectedTradeSlice = createSlice({
  name: "selectedTrade",
  initialState,
  reducers: {
    setSelectedTrade: (state, action: PayloadAction<ClosePriceItem | null>) => {
      state.tradeData = action.payload;
    },
    clearSelectedTrade: (state) => {
      state.tradeData = null;
    },
  },
});

export const { setSelectedTrade, clearSelectedTrade } =
  selectedTradeSlice.actions;
export default selectedTradeSlice.reducer;
