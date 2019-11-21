import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;
  @ViewChild('inputMeasurement') inputMeasurementRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const ingMeasurement = this.inputMeasurementRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingMeasurement);
    this.slService.addIngredient(newIngredient);
  }
}
