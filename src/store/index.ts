import { configureStore } from "@reduxjs/toolkit";
import rafflesStateSlice from "./slices/rafflesStateSlice";

const store = configureStore({
    reducer: {
        rafflesState: rafflesStateSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
