import account from './account'
import expect from 'expect'

describe('test account reducer', () => {
  it('should give init state', () => {
    expect(account(undefined, {})).toEqual({
      usd: 156.12,
      btc: 0.00,
      isEmpty: false,
      notEnoughBalanceError: false,
    })
  })

  it('should subtract usd and add btc to account', () => {
    const state = {usd: 2.00, btc: 0.00}
    const action = {type: 'UPDATE_ACCOUNT', takeUSD: 1.00, addBTC: 1.00}
    const newState = account(state, action)
    const expectedState = {
      usd: 1.00,
      btc: 1.00,
      isEmpty: false,
      notEnoughBalanceError: false,
    }
    expect(newState).toEqual(expectedState)
  })

  it('should subtract usd, add btc and set isEmpty as true', () => {
    const state = {usd: 1.00, btc: 0.00}
    const action = {type: 'UPDATE_ACCOUNT', takeUSD: 1.00, addBTC: 1.00}
    const newState = account(state, action)
    const expectedState = {
      usd: 0.00,
      btc: 1.00,
      isEmpty: true,
      notEnoughBalanceError: false,
    }
    expect(newState).toEqual(expectedState)
  })

  it('should set notEnoughBalanceError as true', () => {
    const state = {usd: 1.00, btc: 0.00, isEmpty: false}
    const action = {type: 'UPDATE_ACCOUNT', takeUSD: 2.00, addBTC: 2.00}
    const newState = account(state, action)
    const expectedState = {
      usd: 1.00,
      btc: 0.00,
      isEmpty: false,
      notEnoughBalanceError: true,
    }
    expect(newState).toEqual(expectedState)
  })

  it('should not change the account if account is Empty', () => {
    const state = {isEmpty: true}
    const action = {type: 'UPDATE_ACCOUNT', takeUSD: 2.00, addBTC: 2.00}
    const newState = account(state, action)
    expect(newState).toEqual(state)
  })

  it('should not change the account if takeUSD is Empty', () => {
    const state = {usd: 2.00, btc: 0.00}
    const action = {type: 'UPDATE_ACCOUNT', takeUSD: 0.00}
    const newState = account(state, action)
    expect(newState).toEqual(state)
  })
})