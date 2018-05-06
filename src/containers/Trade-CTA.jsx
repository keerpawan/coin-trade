import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../actions'

const TradeCTA = ({takeUSD, addBTC, accountIsEmpty, notEnoughBalanceError, updateAccount, resetInput}) => {
  const performTrade = () => {
    updateAccount(takeUSD, addBTC);
    resetInput();
  }

  const ctaClass = 'cta ' + (accountIsEmpty ? 'button-grey' : '');

  return (
    <div>
      {notEnoughBalanceError ? <div className='section-heading'>Not Enough Balance</div> : ''}
      <input className={ctaClass} type='button' value='Trade' onClick={performTrade} disabled={accountIsEmpty}/>
    </div>
  )
}

TradeCTA.propTypes = {
  takeUSD: PropTypes.number.isRequired,
  addBTC: PropTypes.number,
  accountIsEmpty: PropTypes.bool.isRequired,
  notEnoughBalanceError: PropTypes.bool.isRequired,
  updateAccount: PropTypes.func.isRequired,
  resetInput: PropTypes.func.isRequired,
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
  resetInput: () => dispatch(actions.resetTrade())
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeCTA)