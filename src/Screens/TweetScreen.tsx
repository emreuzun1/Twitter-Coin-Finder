import React, {FC} from 'react';
import {View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';

import {RootStackParamList} from '../Navigation/types';
import {Colors} from '../constants/Colors';

const StyledContainer = styled.SafeAreaView({
  flex: 1,
  backgroundColor: Colors.black,
});

type TweetRouteProp = RouteProp<RootStackParamList, 'Tweet'>;
type TweetNavProp = StackNavigationProp<RootStackParamList, 'Tweet'>;

interface ITweetScreen {
  route: TweetRouteProp;
  navigation: TweetNavProp;
}

const TweetScreen: FC<ITweetScreen> = ({route, navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${route.params.symbol}`,
      headerBackTitle: '',
    });
  });
  console.log(route.params.tweets);

  return <StyledContainer />;
};

export default TweetScreen;
