import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import appLocalization from '../../localization/localization';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import BackIcon from '../../components/backIcon';
import React, {useState, useEffect} from 'react';
import Input from '../../components/textInput';
import Button from '../../components/button';
import {styles} from './styles';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Keyboard,
  Image,
  View,
} from 'react-native';

const ProfileScreen = ({navigation}) => {
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
      <StatusBar backgroundColor={colors.bostonBlue} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <BackIcon navigation={navigation} style={{left: 10}} />
            <TouchableOpacity style={styles.logout}>
              <Icon name={'log-out'} size={30} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.createProfileSection}>
            <View style={styles.avatarContainer}>
              <TouchableWithoutFeedback onPress={() => handleProfilePhoto()}>
                {isAvatarSelected ? (
                  <Image
                    style={{width: 125, height: 125, borderRadius: 125 / 2}}
                    source={{
                      uri:
                        'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11051819.jpg',
                    }}
                  />
                ) : (
                  <Image
                    source={imgPath.uploadPhoto}
                    style={styles.uploadPhoto}
                  />
                )}
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex: 0.35}}></View>
            <Input placeholder={appLocalization.inputNamePlaceholder} />
            <Input placeholder={appLocalization.inputSurnamePlaceholder} />
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
                containerStyle={{height: 55, width: '100%'}}
                placeholderStyle={styles.pickerPlaceholder}
                selectedLabelStyle={styles.selectedLabel}
                placeholder={appLocalization.pickerTitle}
                onChangeItem={(item) =>
                  setSelectedValue({['city']: item.value})
                }
                defaultValue={selectedValue.city}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                style={styles.picker}
                showArrow={false}
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
              onPress={() => navigation.navigate('InstructionScreen')}
              buttonName={appLocalization.nextButton}
              style={{
                backgroundColor: isAllDataEntered
                  ? colors.robinsBlue
                  : colors.pickledBluewood,
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default ProfileScreen;
