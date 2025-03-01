import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    isParticipating: boolean;
}

const initialState: UserState = {
    isParticipating: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        participateInRaffle: (state) => {
            state.isParticipating = true;
        },
        withdrawFromRaffle: (state) => {
            state.isParticipating = false;
        },
    },
});

export const { participateInRaffle, withdrawFromRaffle } = userSlice.actions;

export default userSlice.reducer;
