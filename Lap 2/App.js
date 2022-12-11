

import { Text, View, StyleSheet,TextInput,Button} from 'react-native';
import Constants from 'expo-constants';
import React, { useState } from 'react';



// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
var myName ;
function ShowName(name){

myName = name;



  
}
export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        <TextInput  placeholder ='nhap ten' style={styles.text1}
        onChangeText={(text) => setName(text)}
        />
      </Text>
      <Button 
      title='show'
       onPress={() =>ShowName(name)}
      />
      <Text> Hello {myName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    text1:{
        borderWidth:1
    }
});
