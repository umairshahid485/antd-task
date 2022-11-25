import { combineReducers } from 'redux';
import accounts from './accountReducer';

export default combineReducers({
    accounts: accounts
});