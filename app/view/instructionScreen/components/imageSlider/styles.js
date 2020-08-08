import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    width: '100%',
    height: Math.round(Dimensions.get('window').height - 290),
  },
});
