import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  private measurements: {name:string, value:string}[] = [
    { value: 'gr', name:'gramm' },
    { value: 'piece', name:'piece' },
    { value: 'ml', name:'milliliters' }
  ];

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
      ]),
      new Recipe('French Fries',
      'The best taste of potato you can ever experience!',
      '../../assets/images/french-fries.png',
      [
        new Ingredient('Potato', 500, 'gr'),
        new Ingredient('Oil', 1000, 'ml'),
        new Ingredient('Salt', 10, 'gr'),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getMeasurements() {
    return this.measurements.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
