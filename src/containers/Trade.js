import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { updateBTCAmount } from '../actions';

const Trade = ({ inputAmount, btcAmount, onAmountChange }) => {
    let input;
    console.log(`re-render: ${btcAmount}`);
    return (
        <div>
            <input
                type='text'
                value={inputAmount}
                ref={node => {input = node;}}
                onChange={() => onAmountChange(input.value)}
            />
        </div>
    )
};

Trade.propTypes = {
    inputAmount: PropTypes.number,
    btcAmount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
    return {
        inputAmount: state.inputAmount,
        btcAmount: state.btcAmount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAmountChange: (inputAmount) => dispatch(updateBTCAmount(inputAmount))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trade);