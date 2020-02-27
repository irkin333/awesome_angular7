import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from '../../models/ingredient.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }> ;

  constructor(
    private store: Store<fromApp.AppState> 
  ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  ngOnDestroy() {
  }

  onEditShoppingListItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
