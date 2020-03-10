import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers'
import { MeasuresService } from 'src/app/services/measurements.service';
import{
  StopEdit,
  UpdateIngredient,
  AddIngredient,
  DeleteIngredient
} from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;
  ingredientMasurements: {}[];

  constructor(private measuresService: MeasuresService,
              private store: Store<AppState>) { }

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

    this.ingredientMasurements = this.measuresService.getMeasurements();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new StopEdit());
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(
      value.name, value.amount, value.measurement
    );
    if(!!this.editMode) {
      this.store.dispatch(
        new UpdateIngredient(newIngredient)
      );
    } else {
      this.store.dispatch(
        new AddIngredient(newIngredient)
      );
    }
        
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.store.dispatch(
      new DeleteIngredient()
    );
    this.onClear();
  }
}
