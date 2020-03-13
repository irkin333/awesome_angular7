import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private tokenExpTimer: any;

    constructor(
        private store: Store<AppState>
    ) {}

    setLogoutTimer(expirationDuration: number) {
        this.tokenExpTimer = setTimeout(() => {
            this.store.dispatch(new AuthActions.Logout());
        }, expirationDuration);
    }

    clearLogoutTimer() {
        if(this.tokenExpTimer) {
            clearTimeout(this.tokenExpTimer);
            this.tokenExpTimer = null;
        }
    }
}