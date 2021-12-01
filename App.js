import React, {useState} from 'react';
import {View,Text, Button,StyleSheet, SafeAreaView, TextInput} from 'react-native';
////////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },
  textInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
    borderColor: 'black'
  }
  
});
////////////////////////////////////////////////////////////////////////////////

const App = () => {
//useState
const [inputValue, setInputValue] = useState('');

  const CheckValueIsNumberOrNot = () => {
    if(isNaN(inputValue)){
      alert("It is not a Number")
    }else{
      alert("It is a Number")
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style = {styles.container}>
        <TextInput
        placeholder = "Enter Text"
        style = {styles.textInputStyle}
        onChangeText = {(inputValue)=>{setInputValue(inputValue)}}
      />
      <Button
       title = "Check Value is Number or Not"
       color = 'green'
       onPress = {CheckValueIsNumberOrNot}
      />
      </View>

    </SafeAreaView>

  );
};

////////////////////////////////////////////////////////////////////////////////
export default App;

