import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import thunkActions from '../thunk-actions';
const { fetchBTCRate } = thunkActions;

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
  btcValue: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func
};

const mapStateToProps = state => ({
  inputAmount: state.btcTrade.usd,
  btcValue: state.btcTrade.btc,
});

const mapDispatchToProps = dispatch => ({
  onAmountChange: (usd) => dispatch(fetchBTCRate(usd)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
