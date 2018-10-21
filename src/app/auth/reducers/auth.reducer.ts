import * as authActions from '../actions/auth.actions';

export interface State {
  authUser?: any;
}

export const initialState: State = {
  authUser: null
};

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      return {
        ...state,
        authUser: action.payload
      };
    case authActions.AuthActionTypes.LoadAuths:
    default:
      return state;
  }
}
