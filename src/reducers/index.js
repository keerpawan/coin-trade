import { combineReducers } from 'redux';
import btcTrade from './btc-trade';
import account from './account';

const rootReducer = combineReducers({ btcTrade, account });

export default rootReducer;
