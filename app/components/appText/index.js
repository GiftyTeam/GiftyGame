import React from 'react';
import {Text} from 'react-native';

// no can be 1 or 2
// type can be regular, bold, extra_bold, medium, semi_bold
function AppText({style, no = 1, type, children}) {
  let fontFamily = 'BalooChettan-Regular';
  if (no === 2) {
    if (type === 'regular') fontFamily = 'BalooChettan2-Regular';
    else if (type === 'medium') fontFamily = 'BalooChettan2-Medium';
    else if (type === 'semi_bold') fontFamily = 'BalooChettan2-SemiBold';
    else if (type === 'bold') fontFamily = 'BalooChettan2-Bold';
    else if (type === 'extra_bold') fontFamily = 'BalooChettan2-ExtraBold';
  }
  return <Text style={[style, {fontFamily: fontFamily}]}>{children}</Text>;
}

export default AppText;
