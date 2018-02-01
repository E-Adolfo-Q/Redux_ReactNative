import React, { Component }  from 'react';
import {Text, View, Button,StyleSheet} from 'react-native';

class ScondScreen extends Component {    
    static navigationOptions = {
       tabBarLabel:'Tab2' 
    }
    render(){
     return <View style={styles.container}>
        <Text style={styles.title}>
           This is tab 2  
        </Text>
        <Text style={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum
        </Text>
      </View> 
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    fontSize:30,
    marginVertical:10
  },
  content:{
    marginHorizontal:10
  }
});

export default ScondScreen;