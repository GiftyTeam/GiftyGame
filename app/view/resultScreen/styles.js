import {StyleSheet} from 'react-native';

export const resultScreenStyles = StyleSheet.create({
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  scoreComponent: {
    flexDirection: 'row',
    height: 52,
    width: 141,
    alignItems: 'center',
    marginTop: 200,
    justifyContent: 'space-between',
  },
  scoreText: {
    fontSize: 36,
    color: '#FFFFFF',
  },
  infoTextView: {
    flexDirection: 'row',
    height: 52,
    width: 141,
    alignItems: 'center',
    marginTop: 68,
  },
  infoText: {
    fontSize: 36,
    marginRight: 5,
    color: '#FFFFFF',
  },
});

export const descriptionStyle = StyleSheet.create({
  container: {
    height: 104,
    width: 349,
    marginTop: 38,
  },
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  componentText: {
    fontSize: 36,
    color: '#FFFFFF',
  },
});
