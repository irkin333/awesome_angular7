import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private store: Store<AppState>
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        // return this.authService.user.pipe(
        //     take(1),
        //     map(user => {
        //     return !!user || this.router.createUrlTree(['/auth']);
        // }));

        return this.store.select('auth').pipe(
            take(1),
            map(authState => authState.user),
            map(user => {
            return !!user || this.router.createUrlTree(['/auth']);
        }));
    }
}