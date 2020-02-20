
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDeclarations } from './module-imports/application-declarations';
import { PracticeDeclarations } from './module-imports/practice-declarations';
import { Providers } from './module-imports/providers';

import { AlertComponent } from './shared/alert/alert.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/app-routes.module';

import { RecipesModule } from './components/recipes/recipes.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    ...AppDeclarations,
    ...PracticeDeclarations,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AppRoutingModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [Providers],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }
