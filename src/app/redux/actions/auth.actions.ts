// src/app/store/actions/auth.actions.ts
import { createAction, props } from '@ngrx/store';
import { AuthActionTypes } from '../actionType/auth.action-types';
import { AuthActionTypesRegister } from '../actionType/auth.action-types';

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


export const register = createAction(
    // '[Auth] Register',
    AuthActionTypesRegister.REGISTER,
    props<{ email: string; password: string; f_name: string; l_name: string, roleId: number }>()
);

export const registerSuccess = createAction(
    // '[Auth] Register Success',
    AuthActionTypesRegister.REGISTER_SUCCESS,
    props<{ token: string }>()
);

export const registerFailure = createAction(
    // '[Auth] Register Failure',
    AuthActionTypesRegister.REGISTER_FAILURE,
    props<{ error: string }>()
);

// Action for logout
export const logout = createAction(AuthActionTypes.LOGOUT);
