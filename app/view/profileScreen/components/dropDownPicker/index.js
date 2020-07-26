import appLocalization from '../../../../localization/localization';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {DATA} from '../../../../../__mocks__/dropDownPickerData';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../../../../modules/utils/colors';
import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const Picker = () => {
  const [selectedValue, setSelectedValue] = useState({
    city: '',
  });

  return (
    <View>
      <DropDownPicker
        items={DATA}
        onChangeItem={(item) => setSelectedValue({['city']: item.value})}
        containerStyle={{height: 55, width: '100%'}}
        placeholderStyle={styles.pickerPlaceholder}
        selectedLabelStyle={styles.selectedLabel}
        placeholder={appLocalization.pickerTitle}
        defaultValue={selectedValue.city}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        style={styles.picker}
        showArrow={false}
      />
      <View style={{position: 'absolute', top: 16, right: 30}}>
        <FontAwesome5 name={'list'} solid size={23} color={colors.white} />
      </View>
    </View>
  );
};

export default Picker;
