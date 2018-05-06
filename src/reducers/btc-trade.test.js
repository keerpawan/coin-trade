import expect from 'expect';
import btcTrade from './btc-trade';


describe('test btc-trade reducer', () => {
  it('should return init state', () => {
    expect(btcTrade(undefined, {})).toEqual({
        usd: undefined,
        btc: 0.00,
        error: false,
        errorMessage: undefined,
        rate: undefined,
    });
  });

  it('should return same state for action UPDATE_BTC_REQUEST', () => {
    const state = {};
    const action = { type: 'UPDATE_BTC_REQUEST' };
    const newBTCTrade = btcTrade(state, action);
    expect(newBTCTrade).toEqual(state);
  });

  it('should return same state for action UPDATE_BTC_FAILURE', () => {
    const state = {};
    const expectedState = { error: true, errorMessage: 'something went wrong' };
    const action = { type: 'UPDATE_BTC_FAILURE', error: 'something went wrong' };
    const newBTCTrade = btcTrade(state, action);
    expect(newBTCTrade).toEqual(expectedState);
  });

  it('should return same state for action UPDATE_BTC_SUCCESS', () => {
    const state = {};
    const expectedState = {
      error: false, errorMessage: undefined, rate: 100.00, usd: 10.00, btc: 0.10,
    };
    const action = { type: 'UPDATE_BTC_SUCCESS', rate: '100', usd: '10' };
    const newBTCTrade = btcTrade(state, action);
    expect(newBTCTrade).toEqual(expectedState);
  });

  it('should return same state for action default', () => {
    const state = {};
    const action = { type: 'default' };
    const newBTCTrade = btcTrade(state, action);
    expect(newBTCTrade).toEqual(state);
  });
});
