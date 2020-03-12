import { 
  AuthActions,
  AUTH_SUCCESS,
  LOGOUT,
  LOGIN_START,
  AUTH_FAIL,
  SIGNUP_START
} from './auth.actions';
import { User } from '../user.model';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState : State = {
  user: null,
  authError: null,
  loading: false
};

export function authReducer(
  state = initialState,
  action: AuthActions
) {
  switch(action.type) {
    case AUTH_SUCCESS:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        authError: null,
        user: user,
        loading: false
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false
      }
    case LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      }
    case AUTH_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false
      }
    case SIGNUP_START:
      return {
        ...state,
        authError: null,
        loading: true
      }  
    default: 
    return state;
  }
}