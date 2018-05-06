import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AccountDetail from './Account-detail'

const Account = ({usd, btc, isEmpty}) => {
  return (
    <div>
      <div className="section-heading">Account Balance</div>
      <div className="section-account-detail">
        <AccountDetail text='USD' value={usd}/>
        <AccountDetail text='BTC' value={btc}/>
      </div>
      {isEmpty ? <div>Account Empty</div> : ''}
    </div>
  )
}

Account.propTypes = {
  usd: PropTypes.number.isRequired,
  btc: PropTypes.string.isRequired,
  isEmpty: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  usd: state.account.usd,
  btc: state.account.btc.toFixed(8),
  isEmpty: state.account.isEmpty,
})

export default connect(mapStateToProps)(Account)