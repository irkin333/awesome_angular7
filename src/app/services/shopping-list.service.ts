import { EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService {
  ingredientSelected = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientSelected.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // this.ingredients.push(...ingredients);
    // this.ingredientSelected.emit(this.ingredients.slice());
    for(let i of ingredients) {
      this.addIngredient(i);
    }
  }
}
