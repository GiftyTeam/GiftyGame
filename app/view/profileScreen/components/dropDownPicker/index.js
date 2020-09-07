import appLocalization from '../../../../localization/localization';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../../../../modules/utils/colors';
import {View, Dimensions} from 'react-native';
import {styles} from './styles';
import React from 'react';

const Picker = ({onChangeItem, defaultValue, data, disabled}) => {
  return (
    <View>
      <DropDownPicker
        items={data}
        // disabled={disabled}
        onChangeItem={onChangeItem}
        containerStyle={{
          height: 70,
          width: Math.round(Dimensions.get('window').width - 73),
        }}
        placeholderStyle={styles.pickerPlaceholder}
        selectedLabelStyle={styles.selectedLabel}
        placeholder={appLocalization.pickerTitle}
        defaultValue={defaultValue}
        itemStyle={{
          justifyContent: 'flex-start',
          color: 'white',
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
