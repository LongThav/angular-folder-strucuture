// src/app/store/actions/auth.actions.ts
import { createAction, props } from '@ngrx/store';
import { AuthActionTypes } from '../actionType/auth.action-types';

// Action for initiating login
export const login = createAction(
    AuthActionTypes.LOGIN,
    props<{ email: string; password: string }>()
);

// Action for successful login
export const loginSuccess = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ token: string }>()
);

// Action for failed login
export const loginFailure = createAction(
    AuthActionTypes.LOGIN_FAILURE,
    props<{ error: string }>()
);

// Action for logout
export const logout = createAction(AuthActionTypes.LOGOUT);
