import { Action } from '@ngrx/store';

export enum GameActionTypes {
  LoadGames = '[Game] Load Games',
  SetGames = '[Game] Set Games'
}

export class LoadGames implements Action {
  readonly type = GameActionTypes.LoadGames;
}

export class SetGames implements Action {
  readonly type = GameActionTypes.SetGames;
  constructor(public payload: any) {}
}
export type GameActions = LoadGames | SetGames;
