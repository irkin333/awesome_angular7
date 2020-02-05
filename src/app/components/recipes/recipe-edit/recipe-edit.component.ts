import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipe: Recipe;
  ingredientMasurements: {}[];

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = !!params['id'];
      this.initForm();
    });

    this.ingredientMasurements = this.recipeService.getMeasurements();
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  get recipeIngredients() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm() {
    this.recipe = !!this.editMode ? this.recipeService.getRecipe(this.id) 
                        : new Recipe('', '', '', []);

    let ingredients = this.recipe.ingredients.map((ingredient) => {
      console.log(ingredient.measurement)
      return new FormGroup({
        'name': new FormControl(ingredient.name),
        'amount': new FormControl(ingredient.amount),
        'measurement': new FormControl(ingredient.measurement)
      });
    }) 

    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe.name),
      'description': new FormControl(this.recipe.description),
      'imagePath': new FormControl(this.recipe.imagePath),
      'ingredients': new FormArray(ingredients)
    });
  }
}
