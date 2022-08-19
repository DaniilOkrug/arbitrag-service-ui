import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface IState {
  budget: number;
  page: string;
  activeCase: any;
  coinFilter: string;
}

const initialState: IState = {
  budget: 0,
  page: "Budget",
  activeCase: {
    buyCoins: 0,
    sellCoins: 0,
    profit: 0,
    sellPrice: 0,
    bankFrom: "",
    bankTo: "",
    coinFrom: "",
    coinTo: "",
    profitPecent: "",
  },
  coinFilter: "All",
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget(state, action: PayloadAction<number>) {
      state.budget = action.payload;
      state.page = "List";
      console.log(action.payload);
    },

    goToPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },

    setActiveCase(state, action: PayloadAction<any>) {
      state.activeCase = action.payload;
    },

    setCoinFilter(state, action: PayloadAction<string>) {
      state.coinFilter = action.payload;
    },
  },
});

export const { setBudget, goToPage, setActiveCase, setCoinFilter } =
  budgetSlice.actions;

export default budgetSlice.reducer;
