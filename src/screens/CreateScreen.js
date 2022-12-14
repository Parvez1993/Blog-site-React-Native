import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {useBlogStore} from '../ContextApi';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const {createBlog} = useBlogStore();

  return (
    <View
      style={{flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
      {!!error && <Text style={{color: 'red'}}>{error}</Text>}
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput style={styles.label} onChangeText={title => setTitle(title)} />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput
        style={styles.label}
        onChangeText={content => setContent(content)}
      />
      <Text
        style={styles.btn}
        onPress={async () => {
          if (title.trim() === '' || content.trim() === '') {
            setError('Please Fill all the forms');
          } else {
            await createBlog(title, content);
            navigation.navigate('Index');
          }
        }}>
        Create Blog
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  label: {
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 10,
    padding: 3,
    width: WIDTH / 2,
  },
  btn: {
    width: WIDTH / 2,
    backgroundColor: 'green',
    padding: 8,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CreateScreen;
