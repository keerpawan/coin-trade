import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Account = ({usd, btc, isEmpty}) => {
  return (
    <div>
      Account Balance <br/>
      USD: {usd} <br/>
      BTC: {btc} <br/>
      {isEmpty ? <div>Account Empty</div> : ''}
    </div>
  )
}

Account.propTypes = {
  usd: PropTypes.number.isRequired,
  btc: PropTypes.number.isRequired,
  isEmpty: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  usd: state.account.usd,
  btc: state.account.btc,
  isEmpty: state.account.isEmpty,
})

export default connect(mapStateToProps)(Account)