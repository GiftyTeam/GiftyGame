import RegistrationScreen from '../../view/registrationScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InstructionScreen from '../../view/instructionScreen';
import ProfileScreen from '../../view/profileScreen';
import MainStack from './mainStack';
import React from 'react';
import WaitingCodeScreen from '../../view/waitingCodeScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: null,
            elevation: 0,
          },
        }}>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WaitingCode"
          component={WaitingCodeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={ProfileScreen}
          name="Profile"
        />
        <Stack.Screen
          options={{headerShown: false}}
          component={InstructionScreen}
          name="InstructionScreen"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
