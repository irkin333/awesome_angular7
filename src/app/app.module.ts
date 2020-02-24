
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PracticeDeclarations } from './module-imports/practice-declarations';
import { ProvidersModule } from './module-imports/providers';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routes.module';

import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';

import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    ErrorPageComponent,
    AuthComponent,

    ...PracticeDeclarations,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProvidersModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
