import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;
  ingredientMasurements: {}[];

  constructor(private recipeService: RecipeService,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
          measurement: this.editedItem.measurement
        });
      } else {
        this.editMode = false;
      }
    });

    this.ingredientMasurements = this.recipeService.getMeasurements();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(
      value.name,
      value.amount,
      value.measurement
    );
    if(!!this.editMode) {
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient(newIngredient)
      );
    } else {
      this.store.dispatch(
        new ShoppingListActions.AddIngredient(newIngredient)
      );
    }      
        
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete() {
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient()
    );
    this.onClear();
  }
}
