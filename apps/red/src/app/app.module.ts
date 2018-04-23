import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NxModule} from '@nrwl/nx';
import {Params, RouterModule, RouterStateSnapshot} from '@angular/router';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {
  StoreRouterConnectingModule, routerReducer, RouterStateSerializer,
  RouterReducerState
} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@red-workshop/material";

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {url, root: {queryParams}} = routerState;
    const {params} = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return {url, params, queryParams};
  }
}

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: '@red-workshop/home#HomeModule'
        },
        {
          path: 'patients',
          loadChildren: '@red-workshop/patients#PatientsModule'
        }
      ],
      {initialNavigation: 'enabled'}
    ),
    StoreModule.forRoot(reducers, {
      // https://github.com/nrwl/nx/issues/411
      metaReducers: !environment.production ? [/*storeFreeze*/] : []
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
})
export class AppModule {}
