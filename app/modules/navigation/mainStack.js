import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import MainScreen from '../../view/mainScreen';
import QuestionScreen from '../../view/questionScreen';
import PhotoScreen from '../../view/photoScreen';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <HeaderBackButton
              tintColor="white"
              onPress={() => navigation.replace('Main')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Photo"
        component={PhotoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
