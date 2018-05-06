import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'

const TradeCTA = ({takeUSD, addBTC, accountIsEmpty, updateAccount}) => {
  return (
    <input type='button' value='TRADE' onClick={() => updateAccount(takeUSD, addBTC)} disabled={accountIsEmpty}/>
  )
}

TradeCTA.propTypes = {
  takeUSD: PropTypes.number.isRequired,
  addBTC: PropTypes.number.isRequired,
  accountIsEmpty: PropTypes.bool.isRequired,
  updateAccount: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  takeUSD: state.btcTrade.usd,
  addBTC: state.btcTrade.btc,
  accountIsEmpty: state.account.isEmpty,
})

const mapDispatchToProps = dispatch => ({
  updateAccount: (takeUSD, addBTC) => dispatch(
    actions.updateAccount(takeUSD, addBTC)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeCTA)