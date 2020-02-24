import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';

import { AwesomePracticeComponent } from '../assignments/awesome-practice.component';
import { AwesomeDirectiveComponent } from '../assignments/awesome-directive/awesome-directive.component';
import { AwesomeServicesComponent } from '../assignments/awesome-services/awesome-services.component';
import { AwesomeTDFormsComponent } from '../assignments/awesome-td-forms/awesome-td-forms.component';
import { AwesomeReactiveFormsComponent } from '../assignments/awesome-reactive-forms/awesome-reactive-forms.component';
import { AwesomePipesComponent } from '../assignments/awesome-pipes/awesome-pipes.component';
import { AwesomeHttpsComponent } from '../assignments/awesome-https/awesome-https.component';

import { AuthComponent } from '../auth/auth.component';

const AppRoutes: Routes = [
  {
    path: '', component: HomeComponent
  }, {
    path: 'recipes', loadChildren: () => import('../components/recipes/recipes.module').then(m => m.RecipesModule)
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
  },
  /** Need to fix redirect, redirects from /recipes to /not-found */
  /*{
    path: '**', redirectTo: '/not-found'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
