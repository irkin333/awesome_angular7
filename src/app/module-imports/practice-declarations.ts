import { AwesomePracticeComponent } from '../assignments/awesome-practice.component';
import { AwesomeDirectiveComponent } from '../assignments/awesome-directive/awesome-directive.component';
import { BasicHighlightDirective } from '../assignments/awesome-directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from '../assignments/awesome-directive/better-highlight/better-highlight.directive';
import { UnlessDirective } from '../assignments/awesome-directive/unless/unless.directive';

import { AwesomeServicesComponent } from '../assignments/awesome-services/awesome-services.component';
import { AccountComponent } from '../assignments/awesome-services/account/account.component';
import { NewAccountComponent } from '../assignments/awesome-services/new-account/new-account.component';

import { AwesomeTDFormsComponent } from '../assignments/awesome-td-forms/awesome-td-forms.component';
import { AwesomeReactiveFormsComponent } from '../assignments/awesome-reactive-forms/awesome-reactive-forms.component';

import { LectureFormsComponent } from '../assignments/awesome-reactive-forms/lecture-forms/lecture-forms.component';
import { PracticeFormsComponent } from '../assignments/awesome-reactive-forms/practice-forms/practice-forms.component';

import { AwesomePipesComponent } from '../assignments/awesome-pipes/awesome-pipes.component';
import { ShortenPipe } from '../assignments/awesome-pipes/shorten.pipe';
import { FilterPipe } from '../assignments/awesome-pipes/filter.pipe';

export const PracticeDeclarations = [
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
    FilterPipe
];