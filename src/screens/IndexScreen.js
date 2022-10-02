import {View, Text, Button, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useBlogStore} from '../ContextApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
const IndexScreen = () => {
  const {blogs, addBlogPosts} = useBlogStore();

  console.log(blogs);

  return (
    <View>
      <Text>Index Screen abc</Text>
      <Button
        onPress={addBlogPosts}
        title="Add Random Blog"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Icon name="star-rate" size={20} />
      <Icon name="star-rate" size={20} />
      <Icon name="star-rate" size={20} />
      <FlatList
        data={blogs}
        keyExtractor={blogs => blogs.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
