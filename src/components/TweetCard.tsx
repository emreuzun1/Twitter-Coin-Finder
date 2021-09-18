import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from '../constants/Colors';

const {width} = Dimensions.get('screen');

interface ITweet {
  username: string | undefined;
  name: string | undefined;
  id: string;
  text: string;
}

const TweetCard: FC<ITweet> = ({username, name, text}) => {
  return (
    <View style={styles.tweetContainer}>
      <View style={styles.upContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.usernameText}>@{username}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.bottomContainer}>
        <Text style={styles.tweetText}>{text}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tweetContainer: {
    width: width / 1.1,
    marginTop: 12,
    height: 150,
    backgroundColor: Colors.darkBlue,
    padding: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  upContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 4,
    marginLeft: 8,
    color: 'white',
  },
  usernameText: {
    fontSize: 13,
    color: '#ccc',
  },
  bottomContainer: {
    justifyContent: 'flex-start',
    paddingTop: 8,
    paddingLeft: 8,
  },
  tweetText: {
    color: 'white',
    fontSize: 15,
  },
});

export default TweetCard;
