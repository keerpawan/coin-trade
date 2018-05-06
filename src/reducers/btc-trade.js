import constants from '../constants';

const {
  UPDATE_BTC,
  fetch_status: { REQUEST, FAILURE, SUCCESS },
} = constants;

const initState = {
  inputAmount: '',
  usd: 0.00,
  btc: 0.00,
  error: false,
  errorMessage: undefined,
  rate: undefined,
};

export default (state = initState, action) => {
  switch (action.type) {
    case `${UPDATE_BTC}${REQUEST}`:
      return state;
    case `${UPDATE_BTC}${FAILURE}`:
      return Object.assign(
        {}, state,
        { error: true, errorMessage: action.error },
      );
    case `${UPDATE_BTC}${SUCCESS}`: {
      const { rate: rateString, usd: inputAmount } = action;
      const rate = parseFloat(rateString);
      const usd = parseFloat(inputAmount);
      const btc = usd / rate;

      return Object.assign({}, state, {
        error: false, errorMessage: undefined, rate, usd, btc, inputAmount
      });
    }
    default:
      return state;
  }
};
