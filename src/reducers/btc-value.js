import { actions } from '../constants';

const {
  UPDATE_BTC,
  fetch_status: { REQUEST, FAILURE, SUCCESS },
} = actions;

const initState = {
  value: null,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case `${UPDATE_BTC}${REQUEST}`:
      return initState;
    case `${UPDATE_BTC}${FAILURE}`:
      return { error: action.error, value: null };
    case `${UPDATE_BTC}${SUCCESS}`:
      return { error: null, value: parseFloat(action.btcPrice) };
    default:
      return state;
  }
};
