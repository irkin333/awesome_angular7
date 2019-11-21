import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../../../services/recipe.service';
import { Ingredient } from '../../../../models/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem') recipe: {name: string, description: string, imagePath: string, ingredients: Ingredient[]};

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  recipeSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
