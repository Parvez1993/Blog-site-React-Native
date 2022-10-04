import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useBlogStore} from '../ContextApi';

const SingleScreen = ({route}) => {
  let id = route.params.id;
  let [singleData, setSingleData] = useState('');
  const {blogs} = useBlogStore();

  console.log(id);

  console.log(blogs);

  useEffect(() => {
    let findData = blogs.find(item => item.id === id);
    setSingleData(findData);
  }, [singleData]);

  console.log(singleData);

  return (
    <View>
      <Text>{singleData?.title}</Text>
    </View>
  );
};

export default SingleScreen;
