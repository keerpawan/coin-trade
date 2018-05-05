import { actions } from '../constants';

const {
  UPDATE_BTC,
  fetch_status: { REQUEST, FAILURE, SUCCESS },
} = actions;

const btcValueRequested = () => ({
  type: `${UPDATE_BTC}${REQUEST}`,
});

const btcValueFetchFailed = error => ({
  type: `${UPDATE_BTC}${FAILURE}`,
  error,
});

const updateBTCValue = btcPrice => ({
  type: `${UPDATE_BTC}${SUCCESS}`,
  btcPrice,
});

export default {
  btcValueRequested,
  btcValueFetchFailed,
  updateBTCValue,
};
