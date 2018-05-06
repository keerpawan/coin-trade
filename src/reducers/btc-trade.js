import constants from '../constants';

const {
  INIT,
  UPDATE_BTC,
  type: {
    REQUEST, FAILURE, SUCCESS, AMOUNT,
  },
} = constants;

const initState = {
  inputAmount: undefined,
  usd: 0,
  btc: undefined,
  error: false,
  errorMessage: undefined,
  rate: undefined,
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case INIT:
      return initState;
    case `${UPDATE_BTC}${REQUEST}`:
      return Object.assign({}, state, { loading: true });
    case `${UPDATE_BTC}${FAILURE}`:
      return Object.assign(
        {}, state,
        { error: true, errorMessage: action.error, loading: false },
      );
    case `${UPDATE_BTC}${SUCCESS}`: {
      const { rate: rateString } = action;
      const rate = parseFloat(rateString);
      return Object.assign({}, state, {
        error: false, errorMessage: undefined, rate, loading: false,
      });
    }
    case `${UPDATE_BTC}${AMOUNT}`: {
      if (state.loading || !state.rate) return state;
      const { usd: inputAmount } = action;
      const usd = inputAmount ? parseFloat(inputAmount) : 0;
      const btc = usd ? (usd / state.rate) : undefined;

      return Object.assign({}, state, {
        error: false,
        errorMessage: undefined,
        usd,
        btc,
        inputAmount,
        loading: false,
      });
    }
    default:
      return state;
  }
};
