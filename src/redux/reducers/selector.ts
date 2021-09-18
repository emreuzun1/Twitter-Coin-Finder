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
Filters the tweets according to it is reply or not.
*/
export const getTweetsWithoutReply = createSelector(getTweets, data => {
  const tweets = Object.values(data).filter(key => {
    return key.in_reply_to_user_id === undefined;
  });
  return tweets;
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
export const getCoins = createSelector(
  [getTweetsWithoutReply, getUSDT],
  (data, usdt) => {
    Object.keys(data).forEach((dataKey, dataIndex) => {
      Object.keys(usdt).forEach((key, index) => {
        if (data[dataIndex].text.includes(usdt[index].coin.baseAsset)) {
          usdt[index].tweets.push(data[dataIndex]);
          usdt[index].count++;
        }
      });
    });
    const arr = usdt.sort((a: Coin, b: Coin) => b.count - a.count);
    return arr.slice(0, 5);
  },
);
