// src/app/store/reducers/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, logout } from '../actions/auth.actions';

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
  on(logout, () => initialState)
);
