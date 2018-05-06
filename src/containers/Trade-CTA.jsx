import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'

const TradeCTA = ({takeUSD, addBTC, accountIsEmpty, notEnoughBalanceError, updateAccount}) => {
  return (
    <div>
      {notEnoughBalanceError ? <div>Not Enough Balance</div> : ''}
      <input type='button' value='TRADE' onClick={() => updateAccount(takeUSD, addBTC)} disabled={accountIsEmpty}/>
    </div>
  )
}

TradeCTA.propTypes = {
  takeUSD: PropTypes.number.isRequired,
  addBTC: PropTypes.number.isRequired,
  accountIsEmpty: PropTypes.bool.isRequired,
  updateAccount: PropTypes.func.isRequired,
  notEnoughBalanceError: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  takeUSD: state.btcTrade.usd,
  addBTC: state.btcTrade.btc,
  accountIsEmpty: state.account.isEmpty,
  notEnoughBalanceError: state.account.notEnoughBalanceError,
})

const mapDispatchToProps = dispatch => ({
  updateAccount: (takeUSD, addBTC) => dispatch(
    actions.updateAccount(takeUSD, addBTC)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeCTA)