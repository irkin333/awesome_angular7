import { Actions, ofType, Effect } from "@ngrx/effects";
import * as AuthActions from "./auth.actions";
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
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

const handleAuth = (data) => {
  const ExpirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
  const user = new User(
    data.email,
    data.localId,
    data.idToken,
    ExpirationDate
  );
  localStorage.setItem('userData', JSON.stringify(user));
  return new AuthActions.AuthSuccess({
    email: user.email,
    userId: user.id,
    token: user.token,
    expirationDate: ExpirationDate
  });
}

const handleError = (data) => {
  let errorMessage = 'An unknown error occured!';
  if(!data.error || !data.error.error) {
      return of(new AuthActions.AuthFail(errorMessage));
  }
  switch (data.error.error.message) {
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
  return of(new AuthActions.AuthFail(errorMessage));
}

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$.pipe(
    ofType(AuthActions.SIGNUP_START),
    switchMap((signupAction: AuthActions.SignupStart) => {
      return this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBL3VdcueLVBas3Qck4fNyOyBotGsWJ6lo',
        {
            email: signupAction.payload.email,
            password: signupAction.payload.password,
            returnSecureToken: true
        }
      ).pipe(
        map((responseData: any) => {
          return handleAuth(responseData);
        }),
        catchError(errorResponse => {
          return handleError(errorResponse);
        })
      )
    }));

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
      ).pipe(
        map((responseData: any) => {
          return handleAuth(responseData);
        }),
        catchError(errorResponse => {
          return handleError(errorResponse);
      }));
    })
  );

  @Effect()
  autoLogin = this.actions$.pipe(
    ofType(AuthActions.AUTO_LOGIN),
    map(() => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if(!userData) { return { type: 'DUMMY' }; }
      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate)
      );

      if(loadedUser.token) {
        return new AuthActions.AuthSuccess({
              email: loadedUser.email,
              userId: loadedUser.id,
              token: loadedUser.token,
              expirationDate: new Date(userData._tokenExpirationDate)
          });
          // const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
          // this.autoLogout(expirationDuration);
      }
    })
  );

  @Effect({ dispatch: false })
  authRedirect = this.actions$.pipe(
    ofType(
      AuthActions.AUTH_SUCCESS,
      AuthActions.LOGOUT
    ),
    tap(() => {
      this.router.navigate(['/']);
    })
  )

  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      localStorage.removeItem('userData');
    })
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
    ) {}
}
