import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { fetchBTCAmount } from '../thunk-actions';

const Trade = ({ inputAmount, btcValue, onAmountChange }) => {
  let input;
  return (
    <div>
      <input
        type="text"
        value={inputAmount}
        ref={(node) => {
                    input = node;
                }}
        onChange={() => onAmountChange(input.value)}
      />
        <input
            type="text"
            value={btcValue}
            readOnly
        />
    </div>
  );
};

Trade.propTypes = {
  inputAmount: PropTypes.number,
  btcValue: PropTypes.number,
};

const mapStateToProps = state => ({
  inputAmount: state.inputAmount,
  btcValue: state.btcValue.value,
});

const mapDispatchToProps = dispatch => ({
  onAmountChange: () => dispatch(fetchBTCAmount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
