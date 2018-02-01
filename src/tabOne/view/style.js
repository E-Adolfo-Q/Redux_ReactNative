import {    
    StyleSheet,
  } from 'react-native';
  
  const styles = StyleSheet.create({ 
  container:{
    flexDirection:"row",
    backgroundColor:"#FFFFFF",
    borderBottomColor:"#AAA",
    borderBottomWidth:2,
    padding:5,  
  },
  imagen:{
    flex:1,
    height:150,
    resizeMode: "contain"
  },
  info:{
    flex:3,
    alignItems: "flex-start",
    flexDirection: "column",
    alignSelf: "center",
    padding:20
  }, 
  title:{
    fontSize:18,
    fontWeight: "bold" 
  },
  type:{
    fontSize:18 
  },
  language:{
    fontSize:18 
  }
  });
  
  export default styles;