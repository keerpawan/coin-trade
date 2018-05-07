import React from 'react'
import PropTypes from 'prop-types'

const AccountRow = ({text, value}) => {
  return (
    <div className='account-row'>{text} {value}</div>
  )
}

AccountRow.propType = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default AccountRow