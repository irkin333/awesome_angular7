import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AuthComponent } from './auth/auth.component';

const AppRoutes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: 'recipes', loadChildren: () => import('./components/recipes/recipes.module').then(m => m.RecipesModule)
  }, {
    path: 'shopping-list', loadChildren: () => import('./components/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  }, {
    path: 'awesome-practice', loadChildren: () => import('./assignments/awesome-practice.module').then(m => m.AwesomePracticeModule)
  }, {
    path: 'auth', component: AuthComponent
  }, {
    path: 'not-found', component: ErrorPageComponent
  },
  /** Need to fix redirect, redirects from /recipes to /not-found */
  /*{
    path: '**', redirectTo: '/not-found'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, {
    /** we will use lazy loading to split code into bundles, but they will be preloaded */
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
