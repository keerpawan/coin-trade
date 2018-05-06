import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import thunkActions from '../thunk-actions'
import Input from './Input'

const {fetchBTCRate} = thunkActions

const Trade = ({inputAmount, btcValue, onAmountChange}) => {
  return (
    <div>
      <div className="section-heading">Trade</div>
      <Input value="USD" readonly="true"/>
      <Input value={inputAmount} placeholder="Enter your amount" onchange={onAmountChange}/>
      <div className="section-heading">For</div>
      <Input value="BTC" readonly="true"/>
      <Input value={btcValue} placeholder="Display Quote" readonly="true"/>
    </div>
  )
}

Trade.propTypes = {
  inputAmount: PropTypes.string,
  btcValue: PropTypes.string,
  onAmountChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  inputAmount: state.btcTrade.inputAmount,
  btcValue: state.btcTrade.btc ? state.btcTrade.btc.toFixed(8): state.btcTrade.btc,
})

const mapDispatchToProps = dispatch => ({
  onAmountChange: (usd) => dispatch(fetchBTCRate(usd)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Trade)
