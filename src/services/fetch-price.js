import axios from 'axios';

export default () => axios.get('https://api.bitfinex.com/v1/pubticker/btcusd');
