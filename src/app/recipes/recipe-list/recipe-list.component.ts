import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeListChange = new EventEmitter<{name: string, description: string, imagePath: string}>();

  recipes: Recipe[] = [
    new Recipe('First recipe', 'This is simply a test', 'https://www.ndtv.com/cooks/images/poha.000.jpg'),
    new Recipe('Second recipe', 'This is simply a test', 'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/fusilli-salad-with-grilled-chicken-and-zucchini-xl-200308.jpg?itok=FzuPP-Os'),
    new Recipe('Third recipe', 'This is simply a test', 'https://prods3.imgix.net/images/articles/2017_04/Non-featured-Chorizo-egg-recipe.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670')
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeChangedList(recipe: Recipe) {
    this.recipeListChange.emit(recipe);
  }
}
