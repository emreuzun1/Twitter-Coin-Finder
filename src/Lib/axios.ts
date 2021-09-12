import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://api.twitter.com/2/',
};

let instance: AxiosInstance = axios.create(config);

export default instance;
