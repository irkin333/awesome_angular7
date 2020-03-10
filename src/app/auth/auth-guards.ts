import { CanActivate, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private store: Store<AppState>
    ) {}

    canActivate(): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {

        return this.store.select('auth').pipe(
            take(1),
            map(authState => authState.user),
            map(user => {
            return !!user || this.router.createUrlTree(['/auth']);
        }));
    }
}