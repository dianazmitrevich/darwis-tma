import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RafflesState {
    type: "active" | "completed";
}

const initialState: RafflesState = {
    type: "active",
};

const rafflesStateSlice = createSlice({
    name: "rafflesState",
    initialState,
    reducers: {
        setRafflesState: (state, action: PayloadAction<"active" | "completed">) => {
            state.type = action.payload;
        },
    },
});

export const { setRafflesState } = rafflesStateSlice.actions;

export default rafflesStateSlice.reducer;
