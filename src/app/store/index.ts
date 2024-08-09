// src/app/store/app-store.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from '../redux/reducer/rootReducers';
import { AuthEffects } from '../redux/effect/auth.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([AuthEffects]),
  ],
})
export class AppStoreModule { }
