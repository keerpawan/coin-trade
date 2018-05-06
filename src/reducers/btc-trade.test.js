import expect from 'expect'
import btcTrade from './btc-trade'

describe('test btc-trade reducer', () => {
  const expectedInitState = {
    inputAmount: undefined,
    usd: 0.00,
    btc: undefined,
    error: false,
    errorMessage: undefined,
    rate: undefined,
    loading: false,
  }

  it('should return init state', () => {
    expect(btcTrade(undefined, {})).toEqual(expectedInitState)
  })

  it('should return same state for action UPDATE_BTC_REQUEST', () => {
    const state = {loading: true}
    const action = {type: 'UPDATE_BTC_REQUEST'}
    const newState = btcTrade(state, action)
    expect(newState).toEqual(state)
  })

  it('should return same state for action UPDATE_BTC_FAILURE', () => {
    const state = {}
    const expectedState = {
      error: true,
      errorMessage: 'something went wrong',
      loading: false,
    }
    const action = {type: 'UPDATE_BTC_FAILURE', error: 'something went wrong'}
    const newState = btcTrade(state, action)
    expect(newState).toEqual(expectedState)
  })

  it('should return updated state for action UPDATE_BTC_SUCCESS', () => {
    const state = {}
    const expectedState = {
      error: false,
      errorMessage: undefined,
      rate: 100.00,
      loading: false,
    }
    const action = {type: 'UPDATE_BTC_SUCCESS', rate: '100'}
    const newState = btcTrade(state, action)
    expect(newState).toEqual(expectedState)
  })

  it('should return updated state for action UPDATE_BTC_AMOUNT', () => {
    const state = {rate: 100.00, loading:false}
    const expectedState = {
      error: false,
      errorMessage: undefined,
      loading: false,
      btc: 1.00,
      usd: 100,
      inputAmount: '100',
      rate: 100
    }
    const action = {type: 'UPDATE_BTC_AMOUNT', usd: '100'}
    const newState = btcTrade(state, action)
    expect(newState).toEqual(expectedState)
  })

  it('should return same state for action UPDATE_BTC_AMOUNT when rate is missing', () => {
    const state = {loading:false}
    const action = {type: 'UPDATE_BTC_AMOUNT', usd: '100'}
    const newState = btcTrade(state, action)
    expect(newState).toEqual(state)
  })

  it('should return same state for action UPDATE_BTC_AMOUNT when loading is true', () => {
    const state = {rate:'100', loading: true}
    const action = {type: 'UPDATE_BTC_AMOUNT', usd: '100'}
    const newState = btcTrade(state, action)
    expect(newState).toEqual(state)
  })

  it('should reset for action INIT', () => {
    const state = {}
    const action = {type: 'INIT'}
    const newState = btcTrade(state, action)
    expect(newState).toEqual(expectedInitState)
  })

  it('should return same state for action default', () => {
    const state = {}
    const action = {type: 'default'}
    const newState = btcTrade(state, action)
    expect(newState).toEqual(state)
  })
})
