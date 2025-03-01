import { RootState } from "../../store";

export const selectIsParticipating = (state: RootState) => state.user.isParticipating;
