import {createSelector} from 'reselect';
import {IState} from '../../Interfaces/ActionInterface';

const getTweets = (state: IState) => state.tweet.tweets;

const coinTypes = {
  avax: {
    name: 'AVAX',
    count: 0,
  },
  ada: {
    name: 'ADA',
    count: 0,
  },
};

export const getCoins = createSelector(getTweets, data => {
  Object.keys(data).forEach((key, dataIndex) => {
    Object.keys(coinTypes).forEach((key, index) => {
      if (data[dataIndex].text.indexOf(coinTypes[key].name) > -1) {
        coinTypes[key].count++;
      }
    });
  });
  console.log(coinTypes);
});
