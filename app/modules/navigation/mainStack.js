import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import MainScreen from '../../view/mainScreen';
import QuestionScreen from '../../view/questionScreen';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <HeaderBackButton tintColor='white'onPress={() => navigation.replace('MainScreen')}/>
        }}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
