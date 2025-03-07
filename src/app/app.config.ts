import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withIncrementalHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { reducer } from './topics/part-03-state/components/ngrx/store/ngrx.reducer';
import { provideEffects } from '@ngrx/effects';
import { NgrxEffects } from './topics/part-03-state/components/ngrx/store/ngrx.effects';

import { provideStoreDevtools } from '@ngrx/store-devtools';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withIncrementalHydration()),
    provideHttpClient(withFetch()),
    provideStore(),
    provideState({ name: 'ngrx', reducer: reducer }),
    provideEffects(NgrxEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
