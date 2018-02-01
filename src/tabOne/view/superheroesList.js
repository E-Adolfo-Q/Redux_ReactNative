import React, { Component } from 'react';
import { View,
         Text, 
         ActivityIndicator,
         FlatList} 
        from 'react-native';
import { connect } from 'react-redux';
import { fechData } from '../../actions';
import SuperheroesItem from './superheroesItem';
import Input from './Input';
import moment from 'moment'

class SuperheroesList extends Component {
        
    state = {
       date:'13-03-2017'
    }

    static navigationOptions = {
        tabBarLabel: 'Tab1' 
    }

    componentWillMount(){
       const { date } = this.state;
       const NewDate = moment(date,'DD-MM-YYYY').format().split("T")[0];                               
       this.props.fechData(NewDate);     
    }

    shouldComponentUpdate(nextProps,nexState){
        
      const { date } = this.state;    
      const NewDate  = moment(date,'DD-MM-YYYY').format().split("T")[0];
      const NewDate2 = moment(nexState.date,'DD-MM-YYYY').format().split("T")[0];
      
      if(NewDate !== NewDate2){           
         this.props.fechData(NewDate2)
       }
       return true;
    
    }

    onChangedate = (date) => {          
       this.setState({date});     
    }

    _keyExtractor = (item, index) => item.id;   

    getTvShows({item}){                               
     return(
       <SuperheroesItem
          coverURL={item.show.image['medium']}
          title={item.show.name}
          type={item.show.type}
          language={item.show.language}                   
       />
     )     
    }
    render(){               
        const { dataTvMaze } = this.props;                                                
        return (         
         <View>
            <Input 
               onChangedate={this.onChangedate}
               date={this.state.date}
            />                                          
           { dataTvMaze.isFetching && <ActivityIndicator style={{marginTop:20}} size="large" color="#0000ff" /> }
           {
               dataTvMaze.data.length ?
               <FlatList 
                  data={dataTvMaze.data} 
                  renderItem={this.getTvShows}  
                  keyExtractor={this._keyExtractor}
                 />
               : null
           }
         </View>
        )
    }

}
const mapStateToProps = state => {        
    return { dataTvMaze : state.dataReducer }
}

const mapDispatchToProps = dispatch => {       
    return{
        fechData: (date) => dispatch(fechData(date))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SuperheroesList)