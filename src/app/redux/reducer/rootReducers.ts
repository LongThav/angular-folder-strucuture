// src/app/store/reducers/index.ts
import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState } from './auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
};

// src/app/store/app-store.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { rootReducer } from './reducers';
import { AuthEffects } from '../effect/auth.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([AuthEffects]),
  ],
})
export class AppStoreModule {}
