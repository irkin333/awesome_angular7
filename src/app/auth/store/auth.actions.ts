import { Action } from '@ngrx/store';

export const AUTH_SUCCESS = '[Auth] Authenticate Success';
export const AUTH_FAIL = '[Auth] Authenticate Fail';

export const LOGIN_START = '[Auth] Login Start';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT = '[Auth] Log Out';

export const SIGNUP_START = '[Auth] Sign Up Start';

export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {
    email: string,
    password: string
  }) {}
}

export class AuthFail implements Action {
  readonly type = AUTH_FAIL;

  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: {
    email: string,
    password: string
  }) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions = 
  AuthSuccess
| Logout
| LoginStart
| AuthFail
| SignupStart
| AutoLogin;