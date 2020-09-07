import {colors} from '../../modules/utils/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageBackground:{
    width: '100%', 
    height:'100%',
  },
  createProfileSection: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems:'center',
    marginBottom:25,
    paddingBottom:15,
    paddingTop:80,
    marginTop:100
    
  },
  topContainer: {
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:15,
    justifyContent:'space-between',
    height:60,
  },
  avatarContainer: {
    width: 138,
    height: 138,
    borderRadius: 138 / 2,
    borderWidth: 7,
    borderColor: colors.deepSeaGreen,
    position: 'absolute',
    top: -69,
    zIndex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  uploadPhoto: {
    width: 51,
    height: 49,
  },
  logout:{
  
  }
});
