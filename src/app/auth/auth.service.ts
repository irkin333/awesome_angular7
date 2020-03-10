import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
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
        private store: Store<AppState>,
        private http: HttpClient,
        private router: Router
        ) {}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBL3VdcueLVBas3Qck4fNyOyBotGsWJ6lo',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(responseData => {
                this.handleAuth(responseData);
            })
        );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBL3VdcueLVBas3Qck4fNyOyBotGsWJ6lo',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(responseData => {
                this.handleAuth(responseData);
            })
        );
    }

    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if(!userData) {
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if(loadedUser.token) {
            this.store.dispatch(new AuthActions.Login({
                email: loadedUser.email,
                userId: loadedUser.id,
                token: loadedUser.token,
                expirationDate: new Date(userData._tokenExpirationDate)
            }));
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    logout() {
        this.store.dispatch(new AuthActions.Logout());
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.tokenExpTimer) {
            clearTimeout(this.tokenExpTimer);
        }
        this.tokenExpTimer = null;
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    private handleAuth(responseData: AuthResponseData) {
        const ExpirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
        const user = new User(responseData.email, responseData.localId, responseData.idToken, ExpirationDate);
        this.store.dispatch(new AuthActions.Login({
            email: user.email,
            userId: user.id,
            token: user.token,
            expirationDate: ExpirationDate
        }));
        this.autoLogout(+responseData.expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';
        if(!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email is not found.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Password is invalid.';
                break;
        }
        return throwError(errorMessage);
    }
}