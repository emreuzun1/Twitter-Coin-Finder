import axios from '../Lib/axios';
const token =
  'AAAAAAAAAAAAAAAAAAAAAGtpTgEAAAAAcWKx4FcdUdBPPGo54dS9pbX0A0g%3Do26zPgQ73JSnse5xyvFWx3hul4F7XMD0enKxwL5HlNOEl23ywn';

export function requestUser(username: string) {
  return axios.get(`users/by/username/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function requestTweets(id: string) {
  return axios({
    method: 'GET',
    url: `users/${id}/tweets?`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      max_results: 20,
    },
  });
}
