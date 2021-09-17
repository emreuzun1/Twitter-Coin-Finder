import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://api3.binance.com',
};

let instance: AxiosInstance = axios.create(config);

export default instance;
