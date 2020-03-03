import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ProvidersModule } from './module-imports/providers';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routes.module';
import { SharedModule } from './shared/shared.module';

import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import * as fromApp from './store/app.reducers';
import { AuthEffects } from './auth/store/auth.efects';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    ErrorPageComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProvidersModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    // EffectsModule.forRoot([AuthEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
