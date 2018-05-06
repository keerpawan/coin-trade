import expect from 'expect';
import btcTrade from './btc-trade';

describe('test btc-trade reducer', () => {
  const expectedInitState = {
    inputAmount: '0',
    usd: 0.00,
    btc: 0.00,
    error: false,
    errorMessage: undefined,
    rate: undefined,
  };

  it('should return init state', () => {
    expect(btcTrade(undefined, {})).toEqual(expectedInitState);
  });

  it('should return same state for action UPDATE_BTC_REQUEST', () => {
    const state = {};
    const action = { type: 'UPDATE_BTC_REQUEST' };
    const newState = btcTrade(state, action);
    expect(newState).toEqual(state);
  });

  it('should return same state for action UPDATE_BTC_FAILURE', () => {
    const state = {};
    const expectedState = { error: true, errorMessage: 'something went wrong' };
    const action = { type: 'UPDATE_BTC_FAILURE', error: 'something went wrong' };
    const newState = btcTrade(state, action);
    expect(newState).toEqual(expectedState);
  });

  it('should return updated state for action UPDATE_BTC_SUCCESS', () => {
    const state = {};
    const expectedState = {
      error: false, errorMessage: undefined, rate: 100.00, usd: 10.00, btc: 0.10, inputAmount: '10'
    };
    const action = { type: 'UPDATE_BTC_SUCCESS', rate: '100', usd: '10' };
    const newState = btcTrade(state, action);
    expect(newState).toEqual(expectedState);
  });

  it('should reset for action INIT', () => {
    const state = {}
    const action = { type: 'INIT' };
    const newState = btcTrade(state, action);
    expect(newState).toEqual(expectedInitState);
  });

  it('should return same state for action default', () => {
    const state = {};
    const action = { type: 'default' };
    const newState = btcTrade(state, action);
    expect(newState).toEqual(state);
  });
});
