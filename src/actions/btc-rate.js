import constants from '../constants';

const {
  INIT,
  UPDATE_BTC,
  fetch_status: { REQUEST, FAILURE, SUCCESS },
} = constants;

const resetTrade = () => ({
  type: INIT
})

const btcRateRequested = () => ({
  type: `${UPDATE_BTC}${REQUEST}`,
});

const btcRateFetchFailed = error => ({
  type: `${UPDATE_BTC}${FAILURE}`,
  error,
});

const updateBTCRate = (rate, usd) => ({
  type: `${UPDATE_BTC}${SUCCESS}`,
  rate,
  usd,
});

export default {
  resetTrade,
  btcRateRequested,
  btcRateFetchFailed,
  updateBTCRate,
};
