import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {  
  constructor(private dataStorageService: DataStorageService,
    private recipesService: RecipeService) { }

  ngOnInit() {
  }

  onSaveRecipes() {
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipes() {
    const recipes = this.recipesService.getRecipes();
    if(recipes.length === 0) {
      this.dataStorageService.fetchRecipes().subscribe();
    } else {
      return recipes;
    }
  }
}
