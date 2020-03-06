import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  recipesList = new Subject<Recipe[]>();

  private measurements: {name:string, value:string}[] = [
    { value: 'gr', name:'gramm' },
    { value: 'piece', name:'piece' },
    { value: 'ml', name:'milliliters' }
  ];

  private recipes: Recipe[] = [];

  constructor(
    private http: HttpClient
  ) {}

  getMeasurements() {
    return this.measurements.slice();
  }
  
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getLastRecipeInList() {
    return this.recipes.length - 1;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesList.next(this.recipes.slice());
    this.storeRecipes();
  }

  updateRecipe(newRecipe: Recipe, index: number) {
    this.recipes[index] = newRecipe;
    this.recipesList.next(this.recipes.slice());
    this.storeRecipes();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesList.next(this.recipes.slice());
    this.storeRecipes();
  }

  storeRecipes() {
    return this.http.put<any>(
      'https://awesome-angular-app.firebaseio.com//recipes.json',
      this.recipes
      ).subscribe((response) => {
        //console.log(response);
      });
  }
      
  fetchRecipes() {
    return this.http.get<Recipe[]>(
      'https://awesome-angular-app.firebaseio.com//recipes.json'
      ).pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            recipe.ingredients = recipe.ingredients || [];
            return recipe;
          });
        }),
        tap((recipes) => {
          this.recipes = recipes;
          this.recipesList.next(this.recipes.slice());
        })
      );
  }
}
