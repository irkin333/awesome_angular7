import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {logWarnings} from "protractor/built/driverProviders";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem') recipe: {name: string, description: string, imagePath: string};
  @Output() recipeChanged = new EventEmitter<{name: string, description: string, imagePath: string}>();

  constructor() {
  }

  ngOnInit() {
  }

  recipeSelect() {
    this.recipeChanged.emit();
  }
}
