import {createSelector} from 'reselect';
import {IState} from '../../Interfaces/ActionInterface';
import {Coin} from '../../Interfaces/CoinInterface';

const getTweets = (state: IState) => state.tweet.tweets;
const getUsers = (state: IState) => state.user.users;

const coinTypes: Coin[] = [
  {
    name: 'AVAX',
    count: 0,
  },
  {
    name: 'SOL',
    count: 0,
  },
  {
    name: 'MAN',
    count: 0,
  },
  {
    name: 'btc',
    count: 0,
  },
  {
    name: 'DIA',
    count: 0,
  },
  {
    name: '$ada',
    count: 0,
  },
];

export const getIdsOfUsers = createSelector(getUsers, data => {
  // eslint-disable-next-line no-array-constructor
  let ids = new Array<string>();
  Object.values(data).forEach(val => {
    ids.push(val.id);
  });
  return ids;
});

export const getTweetsWithoutReply = createSelector(getTweets, data => {
  const tweets = Object.values(data).filter(key => {
    return key.in_reply_to_user_id === undefined;
  });
  return tweets;
});

export const getCoins = createSelector(getTweetsWithoutReply, data => {
  Object.keys(data).forEach((dataKey, dataIndex) => {
    Object.keys(coinTypes).forEach((key, index) => {
      if (data[dataIndex].text.indexOf(coinTypes[index].name) > -1) {
        coinTypes[index].count++;
      }
    });
  });
  return coinTypes.sort((a: Coin, b: Coin) => b.count - a.count);
});
