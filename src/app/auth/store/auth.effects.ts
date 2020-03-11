import { Actions, ofType, Effect } from "@ngrx/effects";
import * as AuthActions from "./auth.actions";
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from '../user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthResponseData>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBL3VdcueLVBas3Qck4fNyOyBotGsWJ6lo",
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true
        }
      ).pipe(catchError(errorResponse => {
        let errorMessage = 'An unknown error occured!';
        if(!errorResponse.error || !errorResponse.error.error) {
            return of(new AuthActions.LoginFail(errorMessage));
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
        return of(new AuthActions.LoginFail(errorMessage));
      }), map((responseData: any) => {
        const ExpirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
        const user = new User(responseData.email, responseData.localId, responseData.idToken, ExpirationDate);
        return new AuthActions.Login({
          email: user.email,
          userId: user.id,
          token: user.token,
          expirationDate: ExpirationDate
        });
      }));
    })
  );

  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    tap(() => {
      this.router.navigate(['/']);
    })
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
    ) {}
}
