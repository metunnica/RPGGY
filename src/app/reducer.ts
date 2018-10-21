import { ActionReducerMap } from '@ngrx/store';

import { reducer as authReducer, State as AuthState } from './auth';
import { reducer as gameReducer, State as GameState } from './games';

export interface AppState {
  auth?: AuthState;
  game?: GameState;
}
export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  game: gameReducer
};
