import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddButton = ({navigation}) => {
  return (
    <View>
      <Icon
        name="add"
        color="ffffff"
        size={40}
        style={{color: '#FFFF'}}
        onPress={() => navigation.navigate('create')}
      />
    </View>
  );
};

export default AddButton;
