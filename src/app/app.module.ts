import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AwesomeDirectiveComponent } from './awesome-directive/awesome-directive.component';
import { BasicHighlightDirective } from './awesome-directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './awesome-directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './awesome-directive/unless/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { AwesomeServicesComponent } from './awesome-services/awesome-services.component';
import { AccountComponent } from './awesome-services/account/account.component';
import { NewAccountComponent } from './awesome-services/new-account/new-account.component';
import { ServiceAssignComponent } from './assignments/service-assign/service-assign.component';
import { InactiveUsersComponent } from './assignments/service-assign/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './assignments/service-assign/active-users/active-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AwesomeDirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,

    AwesomeServicesComponent,
    AccountComponent,
    NewAccountComponent,

    ServiceAssignComponent,
    InactiveUsersComponent,
    ActiveUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
