import services from '../services';
import actions from '../actions';

const {
  btcRateFetchFailed, btcRateRequested, updateBTCRate,
} = actions;

export default () => (dispatch) => {
  dispatch(btcRateRequested());

  return services.fetchPrice().then(
    (response) => {
      dispatch(updateBTCRate(response.data.last_price));
    },
    (error) => {
      dispatch(btcRateFetchFailed(error));
    },
  );
};
