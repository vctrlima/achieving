import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { User } from "@models/user.model";

import * as fromAppActions from './app.actions';
import { UserService } from "@services/user.service";

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) { }

    public doLogin$ = createEffect(() => this.actions$.pipe(
        ofType(fromAppActions.doLogin),

        mergeMap(({ usernameOrEmail: username, password }) => this.userService.signIn(username, password)
            .pipe(
                map((user: User) => {
                    console.log("doLogin$");
                    console.log(user);

                    return fromAppActions.doLoginSuccess({ user });
                }),

                catchError(() => of(fromAppActions.doLoginFailure())),
            )
        )
    ));
}
