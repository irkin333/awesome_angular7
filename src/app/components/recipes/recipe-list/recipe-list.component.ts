import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipesService: RecipeService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.subscription = this.recipesService.recipesList.subscribe((recipesList) => {
      this.recipes = recipesList;
    });
    
    this.fetchRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private fetchRecipes() {
    const recipes = this.recipesService.getRecipes();
    if(recipes.length === 0) {
      this.dataStorageService.fetchRecipes().subscribe();
    } else {
      this.recipes = recipes;
    }
  }
}
