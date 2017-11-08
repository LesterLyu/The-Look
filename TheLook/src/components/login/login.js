import React, { Component } from 'react';
import {StyleSheet, View,Alert, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {
    constructor(){
        super();
        this.state={username:''}
    }

    handleChange(e){
        this.setState({username:e.target.value})
    }

  _login(){
        if (this.state.username===''){
            Alert.alert('Error','Username must not be empty!')
        }else{
            const name = this.state.username;
            this.props.navigation.navigate("PicSelect", {username:name});
        }

  }

  render(){

    return (
      <View style = {styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            The Look
          </Text>
        </View>
        <View style = {styles.loginContainer}>
          <TextInput

            placeholder="username"
            style={styles.input}
            underlineColorAndroid='transparent'
            onChange={this.handleChange.bind(this)}
          />
          <TextInput
            placeholder="password"
            style={styles.input}
            secureTextEntry
            underlineColorAndroid='transparent'/>
          <TouchableOpacity  onPress={this._login.bind(this)}>
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
})
