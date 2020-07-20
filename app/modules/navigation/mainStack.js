import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../view/mainScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MainStack