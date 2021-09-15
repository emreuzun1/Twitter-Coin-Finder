import React, {FC} from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserCard from '../components/UserCard';
import {Users} from '../constants/TweetUsers';
import {RootStackParamList} from '../Navigation/types';

const {width} = Dimensions.get('screen');

type PeopleProps = BottomTabNavigationProp<RootStackParamList, 'People'>;

const PeopleScreen: FC = () => {
  const navigation = useNavigation<PeopleProps>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#2C374A',
      },
      tabBarIcon: () => <Ionicons name="person" size={24} color="white" />,
    });
  });

  return (
    <View style={styles.container}>
      <TextInput placeholder="Kullanıcı Adı Giriniz." style={styles.input} />
      <FlatList
        data={Users}
        keyExtractor={(item, index) => `${item}_${index}`}
        renderItem={item => <UserCard name={item.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1D2730',
    paddingTop: 24,
  },
  input: {
    width: width / 1.5,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#2C374A',
    color: 'white',
  },
});

export default PeopleScreen;
