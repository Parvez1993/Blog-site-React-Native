import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BlogProvider} from './src/ContextApi.js';
import IndexScreen from './src/screens/IndexScreen.js';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <BlogProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen
              name="Index"
              component={IndexScreen}
              options={{title: 'Index'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BlogProvider>
    </>
  );
};

export default App;
