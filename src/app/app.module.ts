import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Application components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeService } from './services/recipe.service';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './services/shopping-list.service';

/* Practice components */
import { AwesomePracticeComponent } from './assignments/awesome-practice.component';
import { AwesomeDirectiveComponent } from './assignments/awesome-directive/awesome-directive.component';
import { BasicHighlightDirective } from './assignments/awesome-directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './assignments/awesome-directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './assignments/awesome-directive/unless/unless.directive';

import { AwesomeServicesComponent } from './assignments/awesome-services/awesome-services.component';
import { AccountComponent } from './assignments/awesome-services/account/account.component';
import { NewAccountComponent } from './assignments/awesome-services/new-account/new-account.component';

import { AwesomeTDFormsComponent } from './assignments/awesome-td-forms/awesome-td-forms.component';
import { AwesomeReactiveFormsComponent } from './assignments/awesome-reactive-forms/awesome-reactive-forms.component';

import { AppRoutingModule } from './routing/app-routes.module';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { LectureFormsComponent } from './assignments/awesome-reactive-forms/lecture-forms/lecture-forms.component';
import { PracticeFormsComponent } from './assignments/awesome-reactive-forms/practice-forms/practice-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ErrorPageComponent,
    DropdownDirective,

    RecipesComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeDetailComponent,

    ShoppingListComponent,
    ShoppingEditComponent,


    AwesomePracticeComponent,
    AwesomeDirectiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    
    AwesomeServicesComponent,
    AccountComponent,
    NewAccountComponent,

    AwesomeTDFormsComponent,
    AwesomeReactiveFormsComponent,
    
    RecipeEditComponent,
    
    LectureFormsComponent,
    
    PracticeFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
