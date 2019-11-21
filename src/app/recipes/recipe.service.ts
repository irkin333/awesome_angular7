import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('NY pizza',
      'NY pizza is a real american pizza! You should try it at least once in your life!',
      '../../assets/images/pizza.png',
      [
        new Ingredient('Dough', 1000, 'gr'),
        new Ingredient('Salami', 200, 'gr'),
        new Ingredient('Cheese', 250, 'gr'),
        new Ingredient('Tomato sauce', 100, 'gr'),
      ]),
    new Recipe('Hot Dog',
      'Traditional delicious hot dog!',
      '../../assets/images/hot-dog.png',
      [
        new Ingredient('Buns', 1, 'piece'),
        new Ingredient('Sausage', 1, 'piece'),
        new Ingredient('Mustard', 100, 'gr'),
        new Ingredient('Ketchup', 100, 'gr'),
        new Ingredient('Mayonnaise', 100, 'gr'),
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
