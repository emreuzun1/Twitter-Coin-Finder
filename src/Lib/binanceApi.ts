import axios from './binanceAxios';

export async function getSymbols(symbol: string) {
  await axios
    .get('/api/v3/exchangeInfo', {
      params: {
        symbol: symbol,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(val => {
      console.log(val);
    });
}
