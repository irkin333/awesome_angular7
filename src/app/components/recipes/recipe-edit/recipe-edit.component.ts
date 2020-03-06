import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipe.service';
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
              private router: Router,
              private recipesService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = !!params['id'];
      this.initForm();
    });

    this.ingredientMasurements = this.recipesService.getMeasurements();
  }

  onSubmit() {
    if(!!this.editMode) {
      this.recipesService.updateRecipe(this.recipeForm.value, this.id)
    } else {
      this.recipesService.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  onCancel() {
    if(!this.editMode && !this.id) {
      this.id = this.recipesService.getLastRecipeInList();
    }
    this.router.navigate([`/recipes/${this.id}`]);
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
      'measurement': new FormControl(null, Validators.required)
    }))
  }

  get recipeIngredients() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm() {
    this.recipe = !!this.editMode
                      ? this.recipesService.getRecipe(this.id) 
                      : new Recipe('', '', '', []);

    let ingredients = this.recipe.ingredients.map((ingredient) => {
      return new FormGroup({
        'name': new FormControl(ingredient.name, Validators.required),
        'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
        'measurement': new FormControl(ingredient.measurement, Validators.required)
      });
    }) 

    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe.name, Validators.required),
      'description': new FormControl(this.recipe.description, Validators.required),
      'imagePath': new FormControl(this.recipe.imagePath, Validators.required),
      'ingredients': new FormArray(ingredients)
    });
  }
}
