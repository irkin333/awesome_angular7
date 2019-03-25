import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem') recipe: {name: string, description: string, imagePath: string};
  @Output() recipeAct = new EventEmitter<{name: string, description: string, imagePath: string}>();

  constructor() {
  }

  ngOnInit() {
  }

  recipeCl(recipe) {
    this.recipeAct.emit(recipe);
  }
}
