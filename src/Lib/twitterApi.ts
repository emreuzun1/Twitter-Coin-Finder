/* eslint-disable no-array-constructor */
import axios from './twitterAxios';
import {IUser} from '../Interfaces/UserInterface';
import {Tweet, TweetResponse} from '../Interfaces/TweetInterface';
import {AxiosResponse} from 'axios';
const token =
  'AAAAAAAAAAAAAAAAAAAAAGtpTgEAAAAAcWKx4FcdUdBPPGo54dS9pbX0A0g%3Do26zPgQ73JSnse5xyvFWx3hul4F7XMD0enKxwL5HlNOEl23ywn';

export async function requestUser(usernames: string[]) {
  var data = {
    data: {},
  };
  await axios
    .get(
      'users/by?usernames=KriptoBaykus,CryptoMelih,CryptoGenzo,siesta_laila,borsaressami,selcoini,cryptocapo_,kriptokalamar,bullscoin,altcoinrookie,canozsuerx,ekonomikocu,thekriptolik,bitcoinkralice,kriptoraporu,paraleydi,proftrader12,turkelit,analizcikurt,vforrkripto,kriptocubaba,ahmetberkayoruc,trader_dilara,aksuerol,kivancozbilgic,deeephunter,thebullduck,falconsubniger,cryptokaleo,atapaykoc,canszrr,cryptododo7,cryptobjektiff,ktutkunlar',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(val => {
      data.data = val.data.data;
    });
  return data;
}

export async function requestTweets(ids: string[]) {
  let tempData = new Array<Tweet>();
  for (const id of ids) {
    console.log(id);
    await axios({
      method: 'GET',
      url: `users/${id}/tweets?expansions=author_id&&exclude=retweets,replies`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        max_results: 5,
      },
    }).then((val: AxiosResponse<TweetResponse>) => {
      Object.values(val.data.data).map(tweet => {
        const data: Tweet = {
          id: tweet.id,
          text: tweet.text,
          author_id: tweet.author_id,
          username: val.data.includes.users[0].username,
          name: val.data.includes.users[0].name,
        };
        tempData.push(data);
      });
    });
  }
  var newArr = new Array<Tweet>();
  for (var i = 0; i < tempData.length; i++) {
    newArr = newArr.concat(tempData[i]);
  }
  const data = {
    data: newArr,
  };
  return data;
}
