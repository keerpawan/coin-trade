import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Account = ({usd, btc}) => {
  return (
    <div>
      USD: {usd} <br/>
      BTC: {btc}
    </div>
  )
}

Account.propTypes = {
  usd: PropTypes.number.isRequired,
  btc: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  usd: state.account.usd,
  btc: state.account.btc,
})

export default connect(mapStateToProps)(Account)