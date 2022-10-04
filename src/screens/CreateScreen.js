import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <TextInput>
        <Text>Enter Title</Text>
      </TextInput>
    </View>
  );
};

export default CreateScreen;
