import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import MainScreen from '../../view/mainScreen';
import ResultScreen from '../../view/resultScreen';
import QuestionScreen from '../../view/questionScreen';
import PhotoScreen from '../../view/photoScreen';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {imgPath} from '../../modules/utils/images';
import {ModalVisible} from '../../view/mainScreen/redux/changeAction';

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
