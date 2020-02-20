import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { RecipeStartComponent } from '../components/recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';

import { AwesomePracticeComponent } from '../assignments/awesome-practice.component';
import { AwesomeDirectiveComponent } from '../assignments/awesome-directive/awesome-directive.component';
import { AwesomeServicesComponent } from '../assignments/awesome-services/awesome-services.component';
import { AwesomeTDFormsComponent } from '../assignments/awesome-td-forms/awesome-td-forms.component';
import { AwesomeReactiveFormsComponent } from '../assignments/awesome-reactive-forms/awesome-reactive-forms.component';
import { AwesomePipesComponent } from '../assignments/awesome-pipes/awesome-pipes.component';
import { AwesomeHttpsComponent } from '../assignments/awesome-https/awesome-https.component';

import { RecipeDetailComponent } from '../components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../components/recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from '../services/recipes-resolver.service';
import { AuthComponent } from '../auth/auth.component';
import { AuthGuard } from '../auth/auth-guards';

const AppRoutes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
    ]
  }, {
    path: 'shopping-list', component: ShoppingListComponent
  }, {
    path: 'awesome-practice', component: AwesomePracticeComponent,
    children: [
      { path: 'directives', component: AwesomeDirectiveComponent },
      { path: 'services', component: AwesomeServicesComponent },
      { path: 'template-driven-forms', component: AwesomeTDFormsComponent },
      { path: 'reactive-forms', component: AwesomeReactiveFormsComponent },
      { path: 'pipes', component: AwesomePipesComponent },
      { path: 'http-example', component: AwesomeHttpsComponent },
    ]
  }, {
    path: 'auth', component: AuthComponent
  }, {
    path: 'not-found', component: ErrorPageComponent
  }, {
    path: '**', redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
