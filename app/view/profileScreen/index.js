import appLocalization from '../../localization/localization';
import {DATA} from '../../../__mocks__/dropDownPickerData';
import {getUserCredentials} from './redux/profileReducer';
import {addUserCredentials} from './redux/profileAction';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import {imgPath} from '../../modules/utils/images';
import {colors} from '../../modules/utils/colors';
import Picker from './components/dropDownPicker';
import Input from '../../components/textInput';
import Button from '../../components/button';
import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import {styles} from './styles';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Platform,
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
    const ScrollRef = useRef(null);
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
      const options = {
        noData: true,
      };
      ImagePicker.launchImageLibrary(options, (response) => {
        if (response.uri) {
          setIsAvatarSelected(true);
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
                <View></View>
                {!objectValues.includes('') ? (
                  <TouchableOpacity>
                    <Icon name={'log-out'} size={30} color={colors.white} />
                  </TouchableOpacity>
                ) : null}
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
                    value={
                      isAllDataEntered ? userCredentials.name : fields.name
                    }
                    onChangeText={(value) => handleFields('name', value)}
                    placeholder={appLocalization.inputNamePlaceholder}
                  />
                  <Input
                    {...{ScrollRef}}
                    value={
                      isAllDataEntered
                        ? userCredentials.surname
                        : fields.surname
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
                    {...{ScrollRef}}
                    editable={
                      typeof editable !== 'undefined'
                        ? editable
                        : isAllDataEntered
                    }
                    value={
                      isAllDataEntered
                        ? userCredentials.address
                        : fields.address
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
              </View>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  },
);

export default ProfileScreen;
