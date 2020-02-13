import { RecipeService } from '../services/recipe.service';
import { ShoppingListService } from '../services/shopping-list.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../assignments/awesome-https/auth-interceptor.service';
import { LogInterceptorService } from '../assignments/awesome-https/log-interceptor.service';

export const Providers = [
    RecipeService,
    ShoppingListService,
    { 
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    },
    { 
        provide: HTTP_INTERCEPTORS,
        useClass: LogInterceptorService,
        multi: true
    }
];