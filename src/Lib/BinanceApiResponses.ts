export type CoinResponse = {
  baseAsset: string;
  baseAssetPrecision: number;
  baseComissionPrecision: number;
  filters: {};
  icebergAllowed: boolean;
  isMarginTradingAllowed: boolean;
  isSpotTradingAllowed: boolean;
  ocoAllowed: boolean;
  orderTypes: [];
  permissions: [];
  quoteAsset: string;
  quoteAssetPrecision: number;
  quoteCommissionPrecision: number;
  quoteOrderQtyMarketAllowed: boolean;
  quotePrecision: number;
  status: string;
  symbol: string;
};

export interface DataContent {
  exchangeFilters: [];
  rateLimits: [];
  serverTime: number;
  symbols: CoinResponse[];
  timezone: string;
}

export interface BinanceResponse {
  config: {};
  data: DataContent;
  headers: {};
  request: {};
  status: number;
  statusText: undefined;
}

export interface BinanceSymbolResponse {
  price: string;
  symbol: string;
}
