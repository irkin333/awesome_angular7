import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AwesomeHttpsComponent } from './awesome-https/awesome-https.component';
import { AwesomePipesComponent } from './awesome-pipes/awesome-pipes.component';
import { AwesomeReactiveFormsComponent } from './awesome-reactive-forms/awesome-reactive-forms.component';
import { AwesomeTDFormsComponent } from './awesome-td-forms/awesome-td-forms.component';
import { AwesomeServicesComponent } from './awesome-services/awesome-services.component';
import { AwesomeDirectiveComponent } from './awesome-directive/awesome-directive.component';
import { AwesomePracticeComponent } from './awesome-practice.component';


const AwesomeRoutes: Routes = [
  {
    path: '', component: AwesomePracticeComponent,
    children: [
      { path: 'directives', component: AwesomeDirectiveComponent },
			{ path: 'services', component: AwesomeServicesComponent },
			{ path: 'template-driven-forms', component: AwesomeTDFormsComponent },
			{ path: 'reactive-forms', component: AwesomeReactiveFormsComponent },
			{ path: 'pipes', component: AwesomePipesComponent },
			{ path: 'http-example', component: AwesomeHttpsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AwesomeRoutes)],
  exports: [RouterModule]
})
export class AwesomeRoutingModule { }

