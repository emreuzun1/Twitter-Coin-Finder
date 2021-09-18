import React, {FC} from 'react';
import {VirtualizedList, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';

import {RootStackParamList} from '../Navigation/types';
import {Colors} from '../constants/Colors';
import {Tweet} from '../Interfaces/TweetInterface';
import TweetCard from '../components/TweetCard';

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
  return (
    <StyledContainer>
      <VirtualizedList
        contentContainerStyle={styles.listContent}
        data={route.params.tweets}
        getItem={(data: Tweet[], index: number) => ({
          tweet: data[index],
          index: index,
        })}
        getItemCount={(data: Tweet[]) => data.length}
        initialNumToRender={5}
        keyExtractor={data => data.tweet.id}
        renderItem={({item}) => (
          <TweetCard
            text={item.tweet.text}
            name={item.tweet.name}
            username={item.tweet.username}
            id={item.tweet.id}
          />
        )}
      />
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  listContent: {
    alignItems: 'center',
  },
});

export default TweetScreen;
