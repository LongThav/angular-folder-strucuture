import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, logout, registerSuccess, registerFailure } from '../actions/auth.actions';

export interface AuthState {
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token }) => ({
    ...state,
    token,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(registerSuccess, (state, { token }) => ({
    ...state,
    token,
    error: null,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(logout, () => initialState)
);
