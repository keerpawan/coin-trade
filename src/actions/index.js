import { actions } from '../constants';

export const updateBTCAmount = (inputAmount) => {
    return {
        type: actions.UPDATE_BTC,
        inputAmount
    }
};
