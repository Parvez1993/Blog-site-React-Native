import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useBlogStore} from '../ContextApi';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

const EditScreen = ({route, navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  let [singleData, setSingleData] = useState('');
  const {blogs, handleEdit} = useBlogStore();

  let id = route.params.id;

  useEffect(() => {
    let findData = blogs.find(item => item.id === id);
    if (findData) {
      setSingleData(findData);
      setTitle(singleData.title);
      setContent(singleData.content);
    }
  }, [singleData]);

  return (
    <View
      style={{flexDirection: 'column', alignItems: 'center', marginTop: 20}}>
      {!!error && <Text style={{color: 'red'}}>{error}</Text>}
      <Text style={styles.title}>Enter Title:</Text>
      <TextInput
        style={styles.label}
        onChangeText={title => setTitle(title)}
        value={title}
      />
      <Text style={styles.title}>Enter Content:</Text>
      <TextInput
        style={styles.label}
        onChangeText={content => setContent(content)}
        value={content}
      />
      <Text
        style={styles.btn}
        onPress={() => {
          if (title.trim() === '' || content.trim() === '') {
            setError('Please Fill all the forms');
          } else {
            handleEdit(id, title, content);
            navigation.navigate('Index');
          }
        }}>
        Update Blog
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

export default EditScreen;
