import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';


export class ShoppingListService {
  ingredientSelected = new Subject<Ingredient[]>();
  isEdited = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Sausage', 5, 'piece'),
    new Ingredient('Cheese', 500, 'gr'),
    new Ingredient('Sauce', 300, 'ml')
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   // this.ingredientSelected.emit(this.ingredients.slice());
  //   this.ingredientSelected.next(this.ingredients.slice());
  // }

  // updateIngredient(index: number, newIngredient: Ingredient) {
  //   this.ingredients[index] = newIngredient;
  //   this.ingredientSelected.next(this.ingredients.slice());
  // }

  // addIngredients(ingredients: Ingredient[]) {
  //   // this.ingredients.push(...ingredients);
  //   // this.ingredientSelected.emit(this.ingredients.slice());
  //   for(let i of ingredients) {
  //     this.addIngredient(i);
  //   }
  // }

  // deleteIngredient(index: number) {
  //   this.ingredients.splice(index, 1);
  //   this.ingredientSelected.next(this.ingredients.slice());
  // }
}
