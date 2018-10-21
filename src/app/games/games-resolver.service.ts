import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as gameActions from './actions/game.actions';

import { AppState } from './../reducer';

@Injectable({
  providedIn: 'root'
})
export class GamesResolverService {
  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new gameActions.LoadGames());
  }
}
