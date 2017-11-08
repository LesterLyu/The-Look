/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet,Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';

import Login from './src/components/login/login';
import PicSelect from './src/components/PicSelect';

const Navigation = StackNavigator({
    Login:{screen: Login, navigationOptions:{header: null,}},
    PicSelect:{screen: PicSelect}
})
export default class App extends Component {

  render() {
    return (
        <Navigation/>

    );
  }
};

const styles = StyleSheet.create({

});