import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AwesomePracticeComponent } from './awesome-practice.component';
import { BasicHighlightDirective } from './awesome-directive/basic-highlight/basic-highlight.directive';
import { AwesomeDirectiveComponent } from './awesome-directive/awesome-directive.component';
import { BetterHighlightDirective } from './awesome-directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from './awesome-directive/unless/unless.directive';
import { AwesomeServicesComponent } from './awesome-services/awesome-services.component';
import { AccountComponent } from './awesome-services/account/account.component';
import { NewAccountComponent } from './awesome-services/new-account/new-account.component';
import { AwesomeTDFormsComponent } from './awesome-td-forms/awesome-td-forms.component';
import { AwesomeReactiveFormsComponent } from './awesome-reactive-forms/awesome-reactive-forms.component';
import { LectureFormsComponent } from './awesome-reactive-forms/lecture-forms/lecture-forms.component';
import { PracticeFormsComponent } from './awesome-reactive-forms/practice-forms/practice-forms.component';
import { AwesomePipesComponent } from './awesome-pipes/awesome-pipes.component';
import { ShortenPipe } from './awesome-pipes/shorten.pipe';
import { FilterPipe } from './awesome-pipes/filter.pipe';
import { AwesomeHttpsComponent } from './awesome-https/awesome-https.component';
import { AwesomeRoutingModule } from './awesome-practice.routing.module';

@NgModule({
  declarations: [
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
    LectureFormsComponent,
    PracticeFormsComponent,
    AwesomePipesComponent,
    ShortenPipe,
    FilterPipe,
		AwesomeHttpsComponent
  ],
  imports: [
		SharedModule,
		AwesomeRoutingModule
  ]
})
export class AwesomePracticeModule {}