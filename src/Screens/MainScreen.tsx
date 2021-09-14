/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  VirtualizedList,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getCoins, getIdsOfUsers} from '../redux/reducers/selector';
import {requestUser} from '../redux/actions/userActions';
import {requestTweets} from '../redux/actions/tweetActions';
import {IState} from '../Interfaces/ActionInterface';
import {Users} from '../constants/TweetUsers';
import {Coin} from '../Interfaces/CoinInterface';

const MainScreen: FC = () => {
  const ids = useSelector(getIdsOfUsers);
  const users = useSelector((state: IState) => state.user.users);
  const loading = useSelector((state: IState) => state.tweet.loading);
  const coins: Coin[] = useSelector(getCoins);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestUser(Users));
  }, []);

  React.useEffect(() => {
    if (users.length !== 0) {
      dispatch(requestTweets(ids));
    }
  }, [ids]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0FBC5F" />
      ) : (
        <VirtualizedList
          contentContainerStyle={styles.list}
          data={coins}
          initialNumToRender={3}
          getItem={(data: any, index: number) => ({
            item: data[index],
          })}
          getItemCount={data => data.length}
          keyExtractor={item => item.item.name}
          renderItem={({item}) => {
            return (
              <Text style={{color: 'white'}}>
                {item.item.name} {item.item.count}
              </Text>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1D2730',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#2C374A',
    borderRadius: 8,
    paddingLeft: 8,
    color: 'white',
  },
  list: {
    alignItems: 'center',
  },
});

export default MainScreen;
