import { createAction, props } from "@ngrx/store";
import { User } from "@models/user.model";

export const doLogin = createAction(
    '[Login] Do Login',
    props<{ username: string; password: string }>(),
);

export const doLoginSuccess = createAction(
    '[Http Request] Do Login Success',
    props<{ user: User }>(),
);

export const doLoginFailure = createAction(
    '[Http Request] Do Login Failure',
);
