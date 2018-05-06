import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import thunkActions from '../thunk-actions'

const {fetchBTCRate} = thunkActions

const Trade = ({inputAmount, btcValue, onAmountChange}) => {
  let input
  return (
    <div>
      USD <br/>
      <input
        type="text"
        value={inputAmount}
        ref={(node) => {
          input = node
        }}
        onChange={() => onAmountChange(input.value)}
      /><br/>
      BTC <br/>
      <input
        type="text"
        value={btcValue}
        readOnly
      />
    </div>
  )
}

Trade.propTypes = {
  inputAmount: PropTypes.string.isRequired,
  btcValue: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  inputAmount: state.btcTrade.inputAmount,
  btcValue: state.btcTrade.btc,
})

const mapDispatchToProps = dispatch => ({
  onAmountChange: (usd) => dispatch(fetchBTCRate(usd)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Trade)
