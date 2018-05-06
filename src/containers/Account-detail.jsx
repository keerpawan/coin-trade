import React from 'react'
import PropTypes from 'prop-types'

const AccountDetail = ({text, value}) => {
  return (
    <div className="account-row">{text} {value}</div>
  )
}

AccountDetail.propType = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default AccountDetail