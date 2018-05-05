import services from '../services';
import actions from '../actions';

const {
  btcValueFetchFailed, btcValueRequested, updateBTCValue,
} = actions;

const fetchBTCAmount = () => (dispatch) => {
  dispatch(btcValueRequested());

  return services.fetchPrice().then(
    (response) => {
      dispatch(updateBTCValue(response.last_price));
    },
    (error) => {
      dispatch(btcValueFetchFailed(error));
    },
  );
};

export default { fetchBTCAmount };
