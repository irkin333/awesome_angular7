import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingrChangeSubject: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    this.ingrChangeSubject = this.slService.ingredientSelected.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; console.log(this.ingredients); }
    );
  }

  ngOnDestroy() {
    this.ingrChangeSubject.unsubscribe();
  }
}
