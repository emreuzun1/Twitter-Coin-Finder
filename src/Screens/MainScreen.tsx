/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  View,
  VirtualizedList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {getCoins, getIdsOfUsers} from '../redux/reducers/selector';
import {requestUser} from '../redux/actions/userActions';
import {requestTweets} from '../redux/actions/tweetActions';
import {getCoinsFromBinance} from '../redux/actions/coinActions';
import {IState} from '../Interfaces/ActionInterface';
import {Users} from '../constants/TweetUsers';
import {Colors, getColor} from '../constants/Colors';
import CoinBarCard from '../components/CoinBarCard';
import {RootStackParamList} from '../Navigation/types';
import {Coin} from '../Interfaces/CoinInterface';
import TweetDetailCard from '../components/TweetDetailCard';

type MainProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const {width, height} = Dimensions.get('screen');

const StyledContainer = styled.SafeAreaView({
  flex: 1,
  alignItems: 'center',
  backgroundColor: Colors.black,
});

const StyledHeaderContainer = styled.View({
  flex: 1,
  marginLeft: 12,
  marginTop: 24,
});

const StyledHeaderText = styled.Text({
  fontSize: 20,
  fontWeight: 700,
  color: 'white',
});

const StyledGraphContainer = styled.View({
  width: width,
  height: height / 4,
  paddingHorizontal: 32,
});

const StyledGraph = styled.View({
  height: height / 4.5,
  borderLeftWidth: 1,
  borderBottomWidth: 1,
  borderColor: 'white',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'flex-end',
});

const StyledCoinDetailsContainer = styled.View({
  flex: 8,
});

const StyledGraphLine = styled.View({
  marginTop: 12,
  width: width / 1.05,
  backgroundColor: 'white',
  height: 2,
  alignSelf: 'center',
});

interface IMain {
  navigation: MainProp;
}

const MainScreen: FC<IMain> = ({navigation}) => {
  const ids = useSelector(getIdsOfUsers);
  const users = useSelector((state: IState) => state.user.users);
  const loading = useSelector((state: IState) => state.tweet.loading);
  const coins: Coin[] = useSelector(getCoins);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestUser(Users));
    dispatch(getCoinsFromBinance());
  }, []);

  React.useEffect(() => {
    if (users.length !== 0) {
      dispatch(requestTweets(ids));
    }
  }, [ids]);

  return (
    <StyledContainer>
      {loading ? (
        <ActivityIndicator size="large" color="#0FBC5F" />
      ) : (
        <View>
          <StyledHeaderContainer>
            <StyledHeaderText>En çok konuşulan coinler</StyledHeaderText>
          </StyledHeaderContainer>
          <StyledGraphContainer>
            <StyledGraph>
              <VirtualizedList
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={coins}
                getItem={(data: Coin[], index: number) => ({
                  coin: data[index],
                  index: index,
                })}
                getItemCount={data => data.length}
                initialNumToRender={3}
                keyExtractor={item => item.coin.coin.baseAsset}
                renderItem={({item, index}) => {
                  var barHeight = height / 5;
                  if (
                    index !== 0 &&
                    item.coin.count !== 0 &&
                    coins[0].count !== 0
                  ) {
                    barHeight = barHeight * (item.coin.count / coins[0].count);
                  } else if (item.coin.count === 0) {
                    barHeight = 1;
                  }
                  return (
                    <CoinBarCard
                      title={item.coin.coin.baseAsset}
                      count={item.coin.count}
                      color={getColor(index)}
                      height={barHeight}
                    />
                  );
                }}
              />
            </StyledGraph>
          </StyledGraphContainer>
          <StyledGraphLine />
          <StyledCoinDetailsContainer>
            <VirtualizedList
              data={coins}
              getItem={(data: Coin[], index: number) => ({
                coin: data[index],
                index: index,
              })}
              getItemCount={(data: Coin[]) => data.length}
              initialNumToRender={4}
              keyExtractor={item => `${item.index}`}
              renderItem={({item}) => {
                return (
                  <TweetDetailCard
                    symbol={item.coin.coin.symbol}
                    tweets={item.coin.tweets}
                    onPress={(symbol, tweets) =>
                      navigation.navigate('Tweet', {
                        symbol: symbol,
                        tweets: tweets,
                      })
                    }
                  />
                );
              }}
            />
          </StyledCoinDetailsContainer>
        </View>
      )}
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  list: {
    overflow: 'visible',
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
});

export default MainScreen;
