import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { LoginService } from "@services/login.service";
import { User } from "@models/user.model";

import * as fromAppActions from './app.actions';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private loginService: LoginService,
    ) { }

    public doLogin$ = createEffect(() => this.actions$.pipe(
        ofType(fromAppActions.doLogin),

        mergeMap(({ username, password }) => this.loginService.login(username, password)
            .pipe(
                map((user: User) => {
                    console.log("doLogin$");

                    return fromAppActions.doLoginSuccess({ user });
                }),

                catchError(() => of(fromAppActions.doLoginFailure())),
            ),
        )),
    );
}
