import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appLocalization from '../../localization/localization';
import DropDownPicker from 'react-native-dropdown-picker';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import React, {useState, useEffect} from 'react';
import Button from '../../components/button';
import {styles} from './styles';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  Image,
  View,
  Text,
} from 'react-native';
import Input from '../../components/textInput';

const ProfileScreen = () => {
  const [selectedValue, setSelectedValue] = useState({
    city: '',
  });
  const [isAvatarSelected, setIsAvatarSelected] = useState(false);
  const [isAllDataEntered, setIsAllDataEntered] = useState(false);
  const handleProfilePhoto = () => {
    setIsAvatarSelected(true);
  };
  return (
    <ImageBackground
      source={imgPath.mainBackground}
      style={{width: '100%', height: '100%'}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.topContainer}></View>
          <View style={styles.createProfileSection}>
            <View style={styles.avatarContainer}>
             
                <TouchableWithoutFeedback onPress={() => handleProfilePhoto()}>
                {isAvatarSelected ? (
                <Image
                  style={styles.uploadPhoto}
                  style={{width: 125, height: 125, borderRadius: 125 / 2}}
                  source={{
                    uri:
                      'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11051819.jpg',
                  }}
                />
              ) : (
                  <Image
                    style={styles.uploadPhoto}
                    source={imgPath.uploadPhoto}
                  /> )}
                </TouchableWithoutFeedback>
             
            </View>
            <View style={{flex: 0.35}}></View>
            <TextInput
              placeholder={appLocalization.inputNamePlaceholder}
              placeholderTextColor={colors.silver}
              style={[styles.picker, styles.inputText, styles.input]}
            />
            <TextInput
              placeholder={appLocalization.inputSurnamePlaceholder}
              placeholderTextColor={colors.silver}
              style={[styles.picker, styles.inputText, styles.input]}
            />
            <View>
              <DropDownPicker
                items={[
                  {
                    label: 'Baku',
                    value: 'baku',
                  },
                  {
                    label: 'Gandja',
                    value: 'gandja',
                  },
                ]}
                defaultValue={selectedValue.city}
                containerStyle={{height: 55, width: '100%'}}
                style={styles.picker}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                showArrow={false}
                selectedLabelStyle={styles.selectedLabel}
                placeholder={appLocalization.pickerTitle}
                placeholderStyle={styles.pickerPlaceholder}
                onChangeItem={(item) =>
                  setSelectedValue({['city']: item.value})
                }
              />
              <View style={{position: 'absolute', top: 16, right: 30}}>
                <FontAwesome5
                  name={'list'}
                  solid
                  size={23}
                  color={colors.white}
                />
              </View>
            </View>
            <Input placeholder={appLocalization.inputAddressPlaceholder} />
            <Button
              buttonName={appLocalization.nextButton}
              style={{
                backgroundColor: isAllDataEntered
                  ? colors.robinsBlue
                  : colors.pickledBluewood,
              }}
              onPress={()=>alert('you pressed')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default ProfileScreen;
