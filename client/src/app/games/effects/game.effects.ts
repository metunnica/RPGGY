import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as gameActions from '../actions/game.actions';

@Injectable()
export class GameEffects {
  @Effect()
  loadFoos$ = this.actions$.pipe(
    ofType(gameActions.GameActionTypes.LoadGames),
    switchMap(() => {
      return of([{ name: 'FF1' }, { name: 'FF2' }, { name: 'FF3' }]).pipe(
        map(games => {
          return new gameActions.SetGames(games);
        })
      );
    })
  );

  constructor(private actions$: Actions) {}
}
