import { Injectable } from "@angular/core";
import { User } from "@models/user.model";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";

import { Router } from "@angular/router";
import { AuthenticationService } from "@services/authentication.service";
import * as fromAppActions from './app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private userService: AuthenticationService,
    private router: Router,
  ) { }

  public doLogin$ = createEffect(() => this.actions$.pipe(
    ofType(fromAppActions.doLogin),

    mergeMap(({ usernameOrEmail: username, password }) => this.userService.signIn(username, password)
      .pipe(
        map((user: User) => {
          this.router.navigate(['/']);

          return fromAppActions.doLoginSuccess({ user });
        }),

        catchError(() => of(fromAppActions.doLoginFailure())),
      )
    )
  ));
}
