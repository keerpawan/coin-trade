import services from '../services';
import actions from '../actions';

const {
  btcRateFetchFailed, btcRateRequested, updateBTCRate,
} = actions;

export default usd => (dispatch) => {
  dispatch(btcRateRequested());

  return services.fetchPrice().then(
    (response) => {
      dispatch(updateBTCRate(response.last_price, usd));
    },
    (error) => {
      dispatch(btcRateFetchFailed(error));
    },
  );
};
