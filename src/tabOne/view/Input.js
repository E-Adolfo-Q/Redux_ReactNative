import React,{ Component }  from 'react';
import {    
    View,
    StyleSheet    
} from 'react-native';

import DatePicker from 'react-native-datepicker';

export default class Input extends Component {
   render() {
      return(
      <View style={styles.container}>        
        <DatePicker
          style={styles.inputDate}
          mode="date"
          date={this.props.date}
          placeholder="Seleccione Fecha"  
          format="DD-MM-YYYY"
          minDate="10-01-2018"
          maxDate="01-01-2050"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => this.props.onChangedate(date)}
        />
       </View>
      ) 
   } 
}

const styles = StyleSheet.create({
    container:{
      marginVertical:20,         
    },
    inputDate:{
       marginLeft:95,      
       width:200,       
    }
});
