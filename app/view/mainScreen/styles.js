import {StyleSheet} from 'react-native';

export const scoreBoardStyles = StyleSheet.create({
  container: {
    height: 211,
  },
  scoreBoardHeaderAndBottom: {
    flexDirection: 'row',
  },
  scoreBoardHeaderComponent: {
    width: '49.8%',
    alignItems: 'center',
    height: 43,
    backgroundColor: '#055B61',
  },
  scoreBoardHeaderText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  Line: {
    width: '0.4%',
    backgroundColor: '#C4C4C4',
  },
  flatContainer: {
    flexDirection: 'row',
    height: 25,
    backgroundColor: '#CFCFCF',
    opacity: 0.3,
  },
  flatComponent: {
    width: '49.8%',
    alignItems: 'center',
    height: 25,
  },
  flatText: {
    fontSize: 24,
    color: '#000000',
  },
  botomContainer: {
    width: '50%',
    alignItems: 'center',
    height: 43,
    backgroundColor: '#055B61',
  },
  bottomText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
})


export const modalStyle = StyleSheet.create({
  container:{
    paddingTop:45,
    alignItems:'flex-end',
    marginRight:10,
  },
  buttonStyle:{
    height:28,
    width:144,
    justifyContent:'center',
    backgroundColor:'#055B61'
  },
  buttonText:{
    fontSize:18,
    marginLeft:5,
    color:'#FFFFFF'
  },
  rectangleContainer:{
    alignItems:'center',
    width:144,
    backgroundColor:'#055B61'
  },
  rectangle:{
    height:1,
    width:134,
    backgroundColor:"#C4C4C4"
  }

})

export const buttonStyle = {
  container: {
    backgroundColor: '#03C3CF',
    width: '85%',
    height: 60,
    borderRadius: 18,
  },
};
