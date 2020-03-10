import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../../../models/recipe.model';
import { RecipesService } from '../services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipesService: RecipesService,) { }

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
      this.recipesService.fetchRecipes().subscribe();
    } else {
      this.recipes = recipes;
    }
  }
}
