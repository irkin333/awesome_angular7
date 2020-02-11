import { HomeComponent } from '../components/home/home.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { HeaderComponent } from '../header/header.component';
import { DropdownDirective } from '../shared/dropdown.directive';

import { RecipesComponent } from '../components/recipes/recipes.component';
import { RecipeStartComponent } from '../components/recipes/recipe-start/recipe-start.component';
import { RecipeListComponent } from '../components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from '../components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../components/recipes/recipe-edit/recipe-edit.component';

import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../components/shopping-list/shopping-edit/shopping-edit.component';

export const AppDeclarations = [
    HomeComponent,
    HeaderComponent,
    ErrorPageComponent,
    DropdownDirective,

    RecipesComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,

    ShoppingListComponent,
    ShoppingEditComponent,
];