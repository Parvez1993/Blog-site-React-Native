import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useBlogStore} from '../ContextApi';

const SingleScreen = ({route}) => {
  let id = route.params.id;
  let [singleData, setSingleData] = useState('');
  const {blogs} = useBlogStore();

  useEffect(() => {
    let findData = blogs.find(item => item.id === id);
    setSingleData(findData);
  }, [singleData]);

  return (
    <View style={{marginHorizontal: 30, marginTop: 30}}>
      <Text style={{fontSize: 20, fontWeight: '800', marginVertical: 10}}>
        {singleData?.title}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '400',
          marginVertical: 10,
          lineHeight: 20,
        }}>
        {singleData?.content}
      </Text>
    </View>
  );
};

export default SingleScreen;
