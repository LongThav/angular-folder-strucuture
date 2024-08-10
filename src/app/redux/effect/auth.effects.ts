import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { from } from 'rxjs'; // Import `from` to convert Promises to Observables
import { login, loginSuccess, loginFailure } from '../actions/auth.actions';
import { register, registerSuccess, registerFailure } from '../actions/auth.actions';
import { ApiManager } from '../../service/apiManager';
import { ApiEndPoint } from 'src/app/service/endPoint';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private apiManager: ApiManager
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            mergeMap(action =>
                from(this.apiManager.post<{ token: string }>(ApiEndPoint.LOGIN, {
                    email: action.email,
                    password: action.password,
                })).pipe(
                    map(response => {
                        // console.log('Login response:', response); // Log the response
                        return loginSuccess({ token: response.token });
                    }),
                    catchError((error: any) => {
                        // Handle error appropriately
                        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
                        // console.error('Login error:', errorMessage); // Log the error
                        return of(loginFailure({ error: errorMessage }));
                    })
                )
            )
        )
    );

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(register),
            mergeMap(action =>
                from(this.apiManager.post<{ token: string }>(ApiEndPoint.REGISTER, {
                    email: action.email,
                    password: action.password,
                    f_name: action.f_name,
                    l_name: action.l_name,
                    roleId: action.roleId // Include roleId if required
                })).pipe(
                    map(response => {
                        console.log('Register response:', response); // Log the response
                        return registerSuccess({ token: response.token });
                    }),
                    catchError((error: any) => {
                        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
                        console.error('Register error:', errorMessage); // Log the error
                        return of(registerFailure({ error: errorMessage }));
                    })
                )
            )
        )
    );

}
