import { combineReducers } from 'redux';
import { TokenReducer } from './token/tokenReducer';
import { UserReducer } from './user/userReducer';
export const rootReducer = combineReducers({
	token: TokenReducer,
	user: UserReducer,
});
