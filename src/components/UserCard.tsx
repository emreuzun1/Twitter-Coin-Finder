import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');

interface UserCardProps {
  name: string;
}

const UserCard: FC<UserCardProps> = ({name}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.userText}>{name}</Text>
      <TouchableOpacity>
        <Ionicons name="close" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 1.5,
    height: 50,
    marginTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  userText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export default UserCard;
