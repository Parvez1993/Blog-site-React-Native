import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BlogProvider} from './src/ContextApi.js';
import IndexScreen from './src/screens/IndexScreen.js';
import SingleScreen from './src/screens/SingleScreen.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CreateScreen from './src/screens/CreateScreen.js';
import AddButton from './src/component/AddButton.js';
const Stack = createNativeStackNavigator();
const App = ({navigation}) => {
  return (
    <>
      <BlogProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Index"
            screenOptions={({route, navigation}) => ({
              headerStyle: {
                backgroundColor: '#2a7d5f',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => <AddButton navigation={navigation} />,
            })}>
            <Stack.Screen
              name="Index"
              component={IndexScreen}
              options={{title: 'Index'}}
            />
            <Stack.Screen
              name="single"
              component={SingleScreen}
              options={{title: 'Blog Info'}}
            />
            <Stack.Screen
              name="create"
              component={CreateScreen}
              options={{title: 'Screen Screen'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BlogProvider>
    </>
  );
};

export default App;
