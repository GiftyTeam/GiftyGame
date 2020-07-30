import appLocalization from '../../localization/localization';
import Icon from 'react-native-vector-icons/Feather';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import Picker from './components/dropDownPicker';
import BackIcon from '../../components/backIcon';
import Input from '../../components/textInput';
import Button from '../../components/button';
import React, {useState} from 'react';
import {styles} from './styles';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Platform,
  Keyboard,
  ScrollView,
  Image,
  View,
} from 'react-native';

const ProfileScreen = ({navigation}) => {
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
      <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView
         behavior= {(Platform.OS === 'ios')? "padding" : null}
         keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}
          style={styles.container}>
        
              <View style={styles.topContainer}>
                <BackIcon navigation={navigation} style={{left: 10}} />
                <TouchableOpacity style={styles.logout}>
                  <Icon name={'log-out'} size={30} color={colors.white} />
                </TouchableOpacity>
              </View>
              <View style={styles.createProfileSection}>
                <View style={styles.avatarContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => handleProfilePhoto()}>
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
                <Picker />
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
        </KeyboardAvoidingView>
          </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;
