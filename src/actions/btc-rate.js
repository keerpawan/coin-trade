import constants from '../constants';

const {
  INIT,
  UPDATE_BTC,
  type: {
    REQUEST, FAILURE, SUCCESS, AMOUNT,
  },
} = constants;

const resetTrade = () => ({
  type: INIT,
});

const btcRateRequested = () => ({
  type: `${UPDATE_BTC}${REQUEST}`,
});

const btcRateFetchFailed = error => ({
  type: `${UPDATE_BTC}${FAILURE}`,
  error,
});

const updateBTCRate = rate => ({
  type: `${UPDATE_BTC}${SUCCESS}`,
  rate,
});

const updateBTCAmount = usd => ({
  type: `${UPDATE_BTC}${AMOUNT}`,
  usd,
});

export default {
  resetTrade,
  btcRateRequested,
  btcRateFetchFailed,
  updateBTCRate,
  updateBTCAmount,
};
