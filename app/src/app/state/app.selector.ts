import { createSelector } from "@ngrx/store";
import { User } from "@models/user.model";
import { AppState } from "./app.reducer";

export const selectUser = (state: AppState) => state?.user;

export const selectUserFeature = createSelector(
    selectUser,
    (user: User) => user
);
