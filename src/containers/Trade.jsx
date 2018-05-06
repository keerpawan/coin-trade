import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import thunkActions from '../thunk-actions'
import actions from '../actions'
import Input from './Input'

const {fetchBTCRate} = thunkActions
const {updateBTCAmount} = actions

const Trade = ({rate, loading, btcValue, fetchBTCRate}) => {
  const fn = inputAmount => {
    if (!rate && !loading) {
      fetchBTCRate()
    } else {
      updateBTCAmount(inputAmount)
    }
  }
  return (
    <div>
      <div className='section-heading'>Trade</div>
      <Input value='USD' readonly='true'/>
      <Input placeholder='Enter your amount' onchange={fn}
             readonly={loading ? 'true' : undefined}/>
      <div className='section-heading'>For</div>
      <Input value='BTC' readonly='true'/>
      <Input value={btcValue} placeholder='Display Quote' readonly='true'/>
    </div>
  )
}

Trade.propTypes = {
  btcValue: PropTypes.string,
  rate: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  fetchBTCRate: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  btcValue: state.btcTrade.btc ? state.btcTrade.btc.toFixed(8) : '',
  rate: state.btcTrade.rate,
  loading: state.btcTrade.loading,
})

const mapDispatchToProps = dispatch => ({
  fetchBTCRate: () => dispatch(fetchBTCRate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Trade)
