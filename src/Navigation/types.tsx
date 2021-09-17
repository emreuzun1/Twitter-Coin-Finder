import {NavigatorScreenParams} from '@react-navigation/native';

export type RootTabParamList = {
  Home: undefined;
  People: undefined;
  Coin: undefined;
};

export type TabParamList = {
  Home: NavigatorScreenParams<RootTabParamList>;
};
