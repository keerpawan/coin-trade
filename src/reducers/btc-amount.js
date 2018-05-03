import { actions } from '../constants';

export default (state = 0, action) => {
    switch (action.type) {
        case actions.UPDATE_BTC:
            return parseFloat(action.inputAmount);
        default:
            return state;
    }
};