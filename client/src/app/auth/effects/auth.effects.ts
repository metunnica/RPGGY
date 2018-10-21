import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as authActions from '../actions/auth.actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  @Effect()
  loadFoos$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {
      return of({
        name: 'Jarrett Helton'
      }).pipe(
        map(user => {
          return new authActions.SetAuths(user);
        })
      );
    })
  );

  constructor(private actions$: Actions) {}
}
