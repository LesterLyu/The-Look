import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render(){
    return (

      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Text style={styles.logo}>
            The Look
          </Text>
        </View>
        <View style = {styles.loginContainer}>
          <TextInput
            placeholder="username"
            style={styles.input}
            underlineColorAndroid='transparent'/>
          <TextInput
            placeholder="password"
            style={styles.input}
            secureTextEntry
            underlineColorAndroid='transparent'/>
          <TouchableOpacity>
            <Text style={styles.login}>LOGIN</Text>
          </TouchableOpacity>

        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  logoContainer:{

    height: 200,
    width: 300,
    alignItems: 'center',
    alignContent: 'center'
  },
  logo:{
    top:100,
    fontSize: 60,
    fontWeight: 'bold',
    color: '#000000'
  },
  container:{
    height: 400,
    flex:1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'

  },
  login:{
    fontSize:30,
    fontWeight:'800'
  },
  loginContainer:{
    height:150,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    width: 300,
    marginBottom: 20,
    fontSize: 20,
    backgroundColor:'rgba(255,255,255,0.2)',
    color: '#000000'
  }
});
