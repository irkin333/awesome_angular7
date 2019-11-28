import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    this.slService.ingredientSelected.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; console.log(this.ingredients); }
    );
  }
}