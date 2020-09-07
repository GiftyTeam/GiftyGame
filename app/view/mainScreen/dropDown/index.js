import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {modalStyle} from './styles';
import {ModalVisible} from '../redux/changeAction';
import appLocalization from '../../../localization/localization';

const DropDown = ({navigation}) => {
  const dispatch = useDispatch();
  const modalVisible = useSelector(
    (state) => state.mainScreenData.modalVisible,
  );

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => dispatch(ModalVisible(false))}
      onDismiss={() => dispatch(ModalVisible(false))}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => {
          dispatch(ModalVisible(false));
        }}>
        <View style={modalStyle.container}>
          <TouchableOpacity
            onPress={() => {
              console.log('Rules');
            }}
            style={modalStyle.buttonStyle1}>
            <Text style={modalStyle.buttonText}>{appLocalization.rules}</Text>
          </TouchableOpacity>

          <View style={modalStyle.rectangleContainer}>
            <TouchableOpacity style={modalStyle.rectangle} />
          </View>

          <TouchableOpacity
            onPress={() => console.log('Play')}
            style={modalStyle.buttonStyle2}>
            <Text style={modalStyle.buttonText}>
              {appLocalization.howToPlay}
            </Text>
          </TouchableOpacity>

          <View style={modalStyle.rectangleContainer}>
            <TouchableOpacity style={modalStyle.rectangle} />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={modalStyle.buttonStyle3}>
            <Text style={modalStyle.buttonText}>{appLocalization.profile}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DropDown;
