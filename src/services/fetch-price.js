import axios from 'axios'

export default () => {
    return axios.get('https://api.bitfinex.com/v1/pubticker/btcusd')
};