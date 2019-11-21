import { Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AwesomeDirectiveComponent } from './assignments/awesome-directive/awesome-directive.component';
import { AwesomeServicesComponent } from './assignments/awesome-services/awesome-services.component';

export const AppRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent  },
  { path: 'shopping-list', component: ShoppingListComponent  },
  { path: 'awesome-directive', component: AwesomeDirectiveComponent  },
  { path: 'awesome-services', component: AwesomeServicesComponent  }
];
