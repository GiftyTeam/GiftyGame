import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import MainScreen from '../../view/mainScreen';
import ResultScreen from '../../view/resultScreen';
import QuestionScreen from '../../view/questionScreen';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {imgPath} from '../../modules/utils/images';
import {ModalVisible} from '../../view/mainScreen/redux/changeAction';

const Stack = createStackNavigator();

const MainStack = ({navigation}) => {
  const dispatch = useDispatch();
  const modalVisible = useSelector(
    (state) => state.mainScreenReducer.modalVisible,
  );

  return (
    <Stack.Navigator initialRouteName="ResultScreen">
      <Stack.Screen
        name="MainScreen"
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
          headerLeft: () => (
            <HeaderBackButton
              tintColor="white"
              onPress={() => navigation.replace('MainScreen')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <HeaderBackButton
              tintColor="white"
              onPress={() => navigation.replace('MainScreen')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <HeaderBackButton
              tintColor="white"
              onPress={() => navigation.replace('MainScreen')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PhotoScreen"
        component={PhotoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
