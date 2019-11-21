import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { AwesomeDirectiveComponent } from './assignments/awesome-directive/awesome-directive.component';
import { BasicHighlightDirective } from './assignments/awesome-directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './assignments/awesome-directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './assignments/awesome-directive/unless/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { AwesomeServicesComponent } from './assignments/awesome-services/awesome-services.component';
import { AccountComponent } from './assignments/awesome-services/account/account.component';
import { NewAccountComponent } from './assignments/awesome-services/new-account/new-account.component';
import { ServiceAssignComponent } from './assignments/service-assign/service-assign.component';
import { InactiveUsersComponent } from './assignments/service-assign/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './assignments/service-assign/active-users/active-users.component';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeService } from './services/recipe.service';

import { AppRoutes } from './app.routes';

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
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
