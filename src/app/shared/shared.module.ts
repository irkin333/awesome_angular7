import { NgModule } from "@angular/core";
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownDirective,
    LoaderComponent,
    PlaceholderDirective,
    AlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [
    DropdownDirective,
    LoaderComponent,
    PlaceholderDirective,
    AlertComponent,

    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule {}