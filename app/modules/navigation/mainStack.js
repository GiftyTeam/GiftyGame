import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import MainScreen from '../../view/mainScreen';
import ResultScreen from '../../view/resultScreen';
import QuestionScreen from '../../view/questionScreen';
import PhotoScreen from '../../view/photoScreen';
import {useDispatch} from 'react-redux';
import {imgPath} from '../../modules/utils/images';
import {ModalVisible} from '../../view/mainScreen/redux/changeAction';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator initialRouteName="ResultScreen">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerTransparent: true,
          title: '',
          headerRight: () => (
            <TouchableOpacity onPress={() => dispatch(ModalVisible(true))}>
              <Image
                source={imgPath.moreButtonHeader}
                style={{height: 30, width: 30, marginRight: 5}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{headerShown: false}}

      />
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
        options={{headerShown: false}}

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
