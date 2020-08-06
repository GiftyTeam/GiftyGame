import appLocalization from '../../localization/localization';
import {DATA} from '../../../__mocks__/dropDownPickerData';
import {getUserCredentials} from './redux/profileReducer';
import {addUserCredentials} from './redux/profileAction';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import Picker from './components/dropDownPicker';
import BackIcon from '../../components/backIcon';
import Input from '../../components/textInput';
import Button from '../../components/button';
import React, {useState} from 'react';
import {connect} from 'react-redux';
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
  SafeAreaView,
  Image,
  View,
} from 'react-native';
const mapStateToProps = (state) => ({
  userCredentials: getUserCredentials(state),
});
const ProfileScreen = connect(mapStateToProps, {addUserCredentials})(
  ({navigation, userCredentials, addUserCredentials}) => {
    const [isAvatarSelected, setIsAvatarSelected] = useState(false);
    const [isAllDataEntered, setIsAllDataEntered] = useState(false);
    const [fields, setFields] = useState({
      userId: Math.random(100),
      name: '',
      surname: '',
      address: '',
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
      addUserCredentials(fields);
      console.log('userCredentials', userCredentials);
      console.log('objectValues.includes', objectValues.includes(''));
      if (!objectValues.includes('')) {
        navigation.navigate('InstructionScreen');
      }
    };
    console.log('objectValues.includes', objectValues.includes(''));

    return ( <KeyboardAvoidingView
           behavior={Platform.OS === "ios" ? "padding" : null}
           style={{ flex: 1 }}>
      <ImageBackground
        source={imgPath.mainBackground}
        style={{width: '100%', flex: 1, justifyContent: "flex-end"}}>
        <StatusBar backgroundColor={colors.bostonBlue} />
        {/* <ScrollView contentContainerStyle={styles.container}> */}
         
             <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
              <BackIcon navigation={navigation} style={{left: 10}} />
              <TouchableOpacity style={styles.logout}>
                <Icon name={'log-out'} size={30} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.createProfileSection}>
              <View style={styles.avatarContainer}>
                <TouchableWithoutFeedback
                  onPress={() => handleProfilePhoto('avatar')}>
                  {isAvatarSelected ? (
                    <Image
                      style={{width: 125, height: 125, borderRadius: 125 / 2}}
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
              <View style={{flex: 0.35}}></View>
              <Input
                value={isAllDataEntered ? userCredentials.name : fields.name}
                onChangeText={(value) => handleFields('name', value)}
                placeholder={appLocalization.inputNamePlaceholder}
              />
              <Input
                value={
                  isAllDataEntered ? userCredentials.surname : fields.surname
                }
                onChangeText={(value) => handleFields('surname', value)}
                placeholder={appLocalization.inputSurnamePlaceholder}
              />
              <Picker
                data={DATA}
                defaultValue={fields.city}
                onChangeItem={(value) => handleFields('city', value.value)}
              />
              <Input
                editable={
                  typeof editable !== 'undefined' ? editable : isAllDataEntered
                }
                value={
                  isAllDataEntered ? userCredentials.address : fields.address
                }
                onChangeText={(value) => handleFields('address', value)}
                placeholder={appLocalization.inputAddressPlaceholder}
              />
              <Button
                onPress={() => handleNextButton()}
                name={appLocalization.nextButton}
                isDisabled={objectValues.includes('')}
              />
            </View>
            </SafeAreaView>
            <View style={{ flex : 1 }} />
        {/* </ScrollView> */}
      </ImageBackground>
          </KeyboardAvoidingView>
    );
  },
);

export default ProfileScreen;
