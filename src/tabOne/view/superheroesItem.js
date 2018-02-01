import React,{ Component } from 'react';
import { View,Text,Image } from 'react-native';
import styles from './style';

const SuperheroesItem = ({title,coverURL,type,language}) =>
<View style={styles.container}>
  <Image source={{uri:coverURL}} style={styles.imagen}/>
  <View style={styles.info}>
     <Text style={styles.title}>{title}</Text>
     <Text style={styles.type}>{type}</Text>
     <Text style={styles.language}>{language}</Text>
  </View>
</View>

export default SuperheroesItem;