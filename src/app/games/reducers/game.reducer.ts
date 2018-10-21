import { Action } from '@ngrx/store';
import { GameActions, GameActionTypes } from '../actions/game.actions';

export interface State {
  games: any[];
}

export const initialState: State = {
  games: []
};

export function reducer(state = initialState, action: GameActions): State {
  switch (action.type) {
    case GameActionTypes.LoadGames:
      return state;
    case GameActionTypes.SetGames:
      return {
        ...state,
        games: action.payload
      };

    default:
      return state;
  }
}
