import constants from '../constants';

const { UPDATE_ACCOUNT } = constants;

const initState = {
  usd: 156.12,
  btc: 0.00,
  isEmpty: false,
  notEnoughBalanceError: false,
};

const account = (state = initState, action) => {
  if (action.type === UPDATE_ACCOUNT && !state.isEmpty) {
    const usd = state.usd - action.takeUSD;
    if (usd < 0.00) {
      return Object.assign({}, state, { notEnoughBalanceError: true });
    }
    const btc = state.btc + action.addBTC;
    const isEmpty = usd === 0.00;
    return {
      usd, btc, notEnoughBalanceError: false, isEmpty,
    };
  }
  return state;
};
export default account;
