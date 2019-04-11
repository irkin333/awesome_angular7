import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First recipe',
      'This is simply a test',
      'https://www.ndtv.com/cooks/images/poha.000.jpg',
      [
        new Ingredient('Watermelon', 1),
        new Ingredient('Cucumber', 3)
      ]),
    new Recipe('Second recipe',
      'This is simply a test',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/fusilli-salad-with-grilled-chicken-and-zucchini-xl-200308.jpg?itok=FzuPP-Os',
      [
        new Ingredient('Tacos', 5),
        new Ingredient('Tomato', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
