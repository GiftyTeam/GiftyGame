import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WaitingCodeScreen from '../../view/waitingCodeScreen';
import InstructionScreen from '../../view/instructionScreen';
import RegistrationScreen from '../../view/registrationScreen';
 

const Stack = createStackNavigator();


const RegistrationStack = () => {

  return (
    <Stack.Navigator initialRouteName="Registration">
      <Stack.Screen
        name="WaitingCode"
        component={WaitingCodeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Instruction"
        component={InstructionScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};
export default RegistrationStack;
