import { RecipeService } from '../services/recipe.service';
import { ShoppingListService } from '../services/shopping-list.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHTTPInterceptorService } from '../assignments/awesome-https/auth-http-interceptor.service';
import { LogInterceptorService } from '../assignments/awesome-https/log-interceptor.service';
import { AuthInterceptorService } from '../auth/auth-interceptor.service';

export const Providers = [
    RecipeService,
    ShoppingListService,
    // { 
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: AuthHTTPInterceptorService,
    //     multi: true
    // },
    // { 
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: LogInterceptorService,
    //     multi: true
    // },
    { 
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    }
];