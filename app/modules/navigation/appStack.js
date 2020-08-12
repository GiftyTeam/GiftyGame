import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../view/profileScreen';
import MainStack from './mainStack';
import RegistrationStack from './registrationStack';
import RegistrationScreen from '../../view/registrationScreen';
import InstructionScreen from '../../view/instructionScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RegistrationStack" // if there is current user then it should be mainstack
        screenOptions={{
          headerShown: false,
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
          name="RegistrationStack"
          component={RegistrationStack}
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
