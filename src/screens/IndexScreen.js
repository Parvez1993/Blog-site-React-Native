import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useBlogStore} from '../ContextApi';
import Icon from 'react-native-vector-icons/MaterialIcons';
const IndexScreen = ({navigation}) => {
  const {blogs, addBlogPosts, handleDelete} = useBlogStore();

  return (
    <View>
      <View style={styles.buttonSection}>
        <Button
          onPress={addBlogPosts}
          title="Add Random Blog"
          accessibilityLabel="Learn more about this purple button"
          style={styles.buttonStyle}
          color="green"
        />
      </View>

      <FlatList
        data={blogs}
        keyExtractor={blogs => blogs.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('single', {id: item.id})}>
              <View style={styles.row}>
                <Text>{item.title}</Text>
                <Icon
                  name="delete"
                  size={40}
                  onPress={() => handleDelete(item.id)}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 5,
    marginVertical: 5,
    padding: 5,
  },

  buttonSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonStyle: {
    backgroundColor: 'green',
    color: 'white',
  },
});
export default IndexScreen;
