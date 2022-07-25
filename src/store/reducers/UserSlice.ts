import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    activeBanks: string[];
}

const initialState: UserState = {
    activeBanks: ["Tinkoff", "RosBank", "RaiffeisenBankRussia", "QIWI", "YandexMoney", "PostBankRussia", "ABank"]
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addBank(state, action: PayloadAction<string>) {
            if (!state.activeBanks.includes(action.payload)) {
                state.activeBanks.push(action.payload);
            }
        },

        deleteBank(state, action: PayloadAction<string>) {
            if (state.activeBanks.includes(action.payload)) {
                const index = state.activeBanks.indexOf(action.payload);
                if (index > -1) {
                    state.activeBanks.splice(index, 1);
                }

            }
        },
        setBankNames(state, action: PayloadAction<string[]>) {
            state.activeBanks = action.payload;
        },
    },
});

export const { addBank, deleteBank, setBankNames } = userSlice.actions;

export default userSlice.reducer;