import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AwesomeDirectiveComponent } from './awesome-directive/awesome-directive.component';
import { AwesomeServicesComponent } from './awesome-services/awesome-services.component';

export const AppRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent  },
  { path: 'shopping-list', component: ShoppingListComponent  },
  { path: 'awesome-directive', component: AwesomeDirectiveComponent  },
  { path: 'awesome-services', component: AwesomeServicesComponent  }
];
