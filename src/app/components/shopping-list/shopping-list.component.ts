import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }> ;
  // private ingrChangeSubject: Subscription;

  constructor(
    private slService: ShoppingListService,
    private store: Store<{
      shoppingList: { ingredients: Ingredient[] }
    }> 
  ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.slService.getIngredients();
    // this.ingrChangeSubject = this.slService.ingredientSelected.subscribe(
    //   (ingredients: Ingredient[]) => { this.ingredients = ingredients; console.log(this.ingredients); }
    // );
  }

  ngOnDestroy() {
    // this.ingrChangeSubject.unsubscribe();
  }

  onEditShoppingListItem(index: number) {
    this.slService.isEdited.next(index);
  }
}
