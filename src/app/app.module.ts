
import { NgModule } from '@angular/core';
import { NgCoreImports } from './module-imports/ng-core-imports';

import { AppComponent } from './app.component';
import { AppDeclarations } from './module-imports/application-declarations';
import { PracticeDeclarations } from './module-imports/practice-declarations';
import { Providers } from './module-imports/providers';

import { AppRoutingModule } from './routing/app-routes.module';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ...AppDeclarations,
    ...PracticeDeclarations,
    AlertComponent
  ],
  imports: [
    NgCoreImports,
    AppRoutingModule
  ],
  providers: [Providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
