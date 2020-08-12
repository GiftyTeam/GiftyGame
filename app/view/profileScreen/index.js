import appLocalization from '../../localization/localization';
import {DATA} from '../../../__mocks__/dropDownPickerData';
import {getUserCredentials} from './redux/profileReducer';
import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import Picker from './components/dropDownPicker';
import BackIcon from '../../components/backIcon';
import Input from '../../components/textInput';
import Button from '../../components/button';
import {connect} from 'react-redux';
import {styles} from './styles';
import {
  addUserCredentials,
  getUserData,
  addNewUser,
} from './redux/profileAction';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
  Image,
  View,
} from 'react-native';
const mapStateToProps = (state) => ({
  userCredentials: getUserCredentials(state),
});
const ProfileScreen = connect(mapStateToProps, {
  addUserCredentials,
  getUserData,
  addNewUser,
})(({navigation, userCredentials, getUserData, addNewUser}) => {
  const [isAvatarSelected, setIsAvatarSelected] = useState(false);
  const [isAllDataEntered, setIsAllDataEntered] = useState(false);
  const ScrollRef = useRef(null);
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    avatar: '',
  });
  const objectValues = Object.values(fields);

  const handleProfilePhoto = (name) => {
    setIsAvatarSelected(true);
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setFields((fields) => ({
          ...fields,
          [name]: response,
        }));
      }
    });
  };

  const handleFields = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };
  const handleNextButton = () => {
    setIsAllDataEntered(true);
    addNewUser(fields);
    if (!objectValues.includes('')) {
      navigation.navigate('InstructionScreen');
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={colors.bostonBlue} />
        <ImageBackground
          source={imgPath.mainBackground}
          style={styles.imageBackground}>
          <ScrollView ref={ScrollRef} showsVerticalScrollIndicator={false}>
            <View style={styles.topContainer}>
              <View>
                <BackIcon navigation={navigation} />
              </View>
              <TouchableOpacity>
                <Icon name={'log-out'} size={30} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.createProfileSection}>
                <View style={styles.avatarContainer}>
                  <TouchableWithoutFeedback
                    onPress={() => handleProfilePhoto('avatar')}>
                    {isAvatarSelected ? (
                      <Image
                        style={{
                          width: 125,
                          height: 125,
                          borderRadius: 125 / 2,
                        }}
                        source={fields.avatar}
                      />
                    ) : (
                      <Image
                        source={imgPath.uploadPhoto}
                        style={styles.uploadPhoto}
                      />
                    )}
                  </TouchableWithoutFeedback>
                </View>
                <Input
                  {...{ScrollRef}}
                  value={isAllDataEntered ? userCredentials.name : fields.name}
                  onChangeText={(value) => handleFields('firstName', value)}
                  placeholder={appLocalization.inputNamePlaceholder}
                />
                <Input
                  {...{ScrollRef}}
                  value={
                    isAllDataEntered ? userCredentials.surname : fields.surname
                  }
                  onChangeText={(value) => handleFields('lastName', value)}
                  placeholder={appLocalization.inputSurnamePlaceholder}
                />
                <Picker
                  data={DATA}
                  defaultValue={fields.city}
                  onChangeItem={(value) => handleFields('city', value.value)}
                />
                <Input
                  {...{ScrollRef}}
                  editable={true}
                  value={
                    isAllDataEntered ? userCredentials.address : fields.address
                  }
                  onChangeText={(value) => handleFields('street', value)}
                  placeholder={appLocalization.inputAddressPlaceholder}
                />
                <Button
                  onPress={() => handleNextButton()}
                  name={appLocalization.nextButton}
                  isDisabled={objectValues.includes('')}
                />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
});

export default ProfileScreen;
