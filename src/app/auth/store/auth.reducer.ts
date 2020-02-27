import { 
  AuthActions,
  LOGIN, LOGOUT,
  Login, Logout
} from './auth.actions';
import { User } from '../user.model';

export interface State {
  user: User;
}

const initialState : State = {
  user: null
};

export function authReducer(
  state = initialState,
  action: AuthActions
) {
  switch(action.type) {
    case LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user: user
      }
    case LOGOUT:
      return {
        ...state,
        user: null
      }
    default: 
    return state;
  }
}