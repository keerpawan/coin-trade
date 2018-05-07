import React from 'react'
import PropTypes from 'prop-types'

const Input = ({clearInput, value, placeholder, readonly, onchange}) => {
  let input;
  const inputChanged = () => {
    if (onchange && !readonly) onchange(input.value)
  };
  return (
    <div className='input-row'>
      <input type='text' value={value} placeholder={placeholder} autoFocus={!readonly}
             readOnly={readonly} ref={(node) => {
               input = node
                if (clearInput && input) input.value = '';
             }}
             onChange={inputChanged}/>
    </div>
  )
}

Input.propTypes = {
  clearInput: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.string,
  onchange: PropTypes.func,
}

export default Input