import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AppRoutingModule } from 'src/app/routing/app-routes.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ]
})
export class RecipesModule {}