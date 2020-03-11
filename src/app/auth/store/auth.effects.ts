import { Actions, ofType, Effect } from "@ngrx/effects";
import * as AuthActions from "./auth.actions";
import { of } from 'rxjs';
import { switchMap, catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { User } from '../user.model';
import { Injectable } from '@angular/core';

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
      ).pipe(catchError(error => {
        return of();
      }), map((responseData: any) => {
        const ExpirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
        const user = new User(responseData.email, responseData.localId, responseData.idToken, ExpirationDate);
        return of(new AuthActions.Login({
          email: user.email,
          userId: user.id,
          token: user.token,
          expirationDate: ExpirationDate
        }));
      }));
    })
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
