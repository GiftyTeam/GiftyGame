import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {modalStyle} from './styles';
import {ModalVisible} from './redux/changeAction';
import appLocalization from '../../localization/localization';

const DropDown = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector(
    (state) => state.mainScreenReducer.modalVisible,
  );

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => dispatch(ModalVisible(false))}>
      <TouchableWithoutFeedback
        onPress={() => {
          dispatch(ModalVisible(false));
        }}>
        <View style={modalStyle.container}>
          <TouchableOpacity
            onPress={() => {
              console.log('Rules');
            }}
            style={modalStyle.buttonStyle}>
            <Text style={modalStyle.buttonText}>{appLocalization.rules}</Text>
          </TouchableOpacity>

          <View style={modalStyle.rectangleContainer}>
            <View style={modalStyle.rectangle} />
          </View>

          <TouchableOpacity
            onPress={() => console.log('Play')}
            style={modalStyle.buttonStyle}>
            <Text style={modalStyle.buttonText}>
              {appLocalization.howToPlay}
            </Text>
          </TouchableOpacity>

          <View style={modalStyle.rectangleContainer}>
            <View style={modalStyle.rectangle} />
          </View>

          <TouchableOpacity
            onPress={() => console.log('Profile')}
            style={modalStyle.buttonStyle}>
            <Text style={modalStyle.buttonText}>{appLocalization.profile}</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DropDown;
