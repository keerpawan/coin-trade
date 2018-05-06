import constants from '../constants';

export default (takeUSD, addBTC) => ({
  type: constants.UPDATE_ACCOUNT,
  takeUSD,
  addBTC,
});
