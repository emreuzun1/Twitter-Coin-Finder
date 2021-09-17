/* eslint-disable no-array-constructor */
import axios from './twitterAxios';
import {IUser} from '../Interfaces/UserInterface';
import {ITweet} from '../Interfaces/TweetInterface';
const token =
  'AAAAAAAAAAAAAAAAAAAAAGtpTgEAAAAAcWKx4FcdUdBPPGo54dS9pbX0A0g%3Do26zPgQ73JSnse5xyvFWx3hul4F7XMD0enKxwL5HlNOEl23ywn';

export async function requestUser(usernames: string[]) {
  let tempData = new Array<IUser>();
  for (const username of usernames) {
    await axios
      .get(`users/by/username/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(val => {
        tempData.push(val.data.data);
      });
  }
  const data = {
    data: tempData,
  };
  return data;
}

export async function requestTweets(ids: string[]) {
  let tempData = new Array<ITweet>();
  for (const id of ids) {
    await axios({
      method: 'GET',
      url: `users/${id}/tweets?tweet.fields=in_reply_to_user_id`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        max_results: 50,
      },
    }).then(val => {
      tempData.push(val.data.data);
    });
  }
  var newArr = new Array<ITweet>();
  for (var i = 0; i < tempData.length; i++) {
    newArr = newArr.concat(tempData[i]);
  }
  const data = {
    data: newArr,
  };
  return data;
}
