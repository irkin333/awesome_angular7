import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';

import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient,
                private recipesService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put(
            'https://awesome-angular-app.firebaseio.com//recipes.json',
            recipes
        ).subscribe((response) => {
            console.log(response)
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
                this.recipesService.setRecipes(recipes)
            })
        ); 
    }
}