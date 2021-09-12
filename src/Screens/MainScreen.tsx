import React, {FC} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  VirtualizedList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getCoins} from '../redux/reducers/selector';
import {requestUser} from '../redux/actions/userActions';
import {requestTweets} from '../redux/actions/tweetActions';
import TweetCard from '../components/TweetCard';
import {IState} from '../Interfaces/ActionInterface';

const MainScreen: FC = () => {
  const [username, setUsername] = React.useState<string>('');
  const user = useSelector((state: IState) => state.user.user);
  const tweets = useSelector((state: IState) => state.tweet.tweets);
  const loading = useSelector((state: IState) => state.tweet.loading);
  const tweetsv2 = useSelector(getCoins);
  const dispatch = useDispatch();

  const getTweets = async () => {
    dispatch(requestUser(username));
    dispatch(requestTweets(user.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Kullanıcı adı girin."
        style={styles.input}
        onChangeText={val => setUsername(val)}
      />
      <Button title="Ara" color="#0FBC5F" onPress={() => getTweets()} />
      {loading ? (
        <ActivityIndicator size="large" color="#0FBC5F" />
      ) : (
        <VirtualizedList
          contentContainerStyle={styles.list}
          data={tweets}
          initialNumToRender={5}
          getItem={(data: any, index: number) => ({
            item: data[index],
          })}
          getItemCount={data => data.length}
          keyExtractor={item => item.item.id}
          renderItem={({item}) => (
            <TweetCard
              id={item.item.id}
              text={item.item.text}
              username={user?.username}
              name={user?.name}
            />
          )}
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
