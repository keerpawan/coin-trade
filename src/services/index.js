import fetchPrice from './fetch-price';
import fetchPriceStub from './fetch-price-stub';

const realServices = { fetchPrice };
const stubServices = { fetchPrice: fetchPriceStub };

export default (process.env.REACT_APP_ENV === 'stub') ? realServices : stubServices