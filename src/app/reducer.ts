import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { State as AuthState, reducer as authReducer } from './auth/reducers/auth.reducer';
import { State as GameState, reducer as gameReducer } from './games/reducers/game.reducer';

export interface AppState {
  auth?: AuthState;
  game?: GameState;
}
export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  game: gameReducer
};
