import React from 'react'
import PropTypes from 'prop-types'

const Input = ({value, placeholder, readonly, onchange }) => {
  let input
  return (
    <div className='input-row'>
      <input type='text' value={value} placeholder={placeholder} autoFocus={!readonly}
             readOnly={readonly} ref={(node) => {input = node}}
             onChange={() => onchange ? onchange(input.value) : {}}/>
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.string,
  onclick: PropTypes.func,
}

export default Input