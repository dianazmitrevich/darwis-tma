import { RootState } from "../../store";

export const getRaffleState = (state: RootState) => state.rafflesState.type;
