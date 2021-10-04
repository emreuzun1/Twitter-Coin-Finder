/* eslint-disable no-array-constructor */
import {createSelector} from 'reselect';
import {IState} from '../../Interfaces/ActionInterface';
import {Coin} from '../../Interfaces/CoinInterface';

const getTweets = (state: IState) => state.tweet.tweets;
const getUsers = (state: IState) => state.user.users;
const getCoinsFromBinance = (state: IState) => state.coin.coin;

/*
Gets the id of users from reducer.
*/
export const getIdsOfUsers = createSelector(getUsers, data => {
  let ids = new Array<string>();
  Object.values(data).forEach(val => {
    ids.push(val.id);
  });
  return ids;
});

/*
Filters the coins according to it is a USDT.
*/

export const getUSDT = createSelector(getCoinsFromBinance, data => {
  var usdtArr = new Array<Coin>();
  Object.values(data).filter(val => {
    if (val.quoteAsset === 'USDT') {
      const coin: Coin = {
        coin: val,
        count: 0,
        tweets: [],
      };
      usdtArr.push(coin);
    }
  });
  return usdtArr;
});

/*
Checks for tweets that include the coin or not.
*/
export const getCoins = createSelector([getTweets, getUSDT], (tweets, usdt) => {
  Object.values(tweets).map(data => {
    Object.keys(usdt).forEach((key, index) => {
      if (data.text.indexOf(usdt[index].coin.baseAsset) > -1) {
        usdt[index].tweets.push(data);
        usdt[index].count++;
      }
    });
  });
  const arr = usdt.sort((a: Coin, b: Coin) => b.count - a.count);
  return arr.slice(0, 5);
});
