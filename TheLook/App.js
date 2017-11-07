/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Content } from 'native-base';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './src/components/login/login';
import FooterNav from "./src/components/sandbox/FooterNav";
import Profile from "./src/components/profile/profile";

export default class App extends Component<{}> {

    render() {
    return (
        <Container>
            <Header><Text style={{marginTop: 15, fontSize: 20}}>THE LOOK</Text></Header>
            <Profile/>
            <FooterNav/>
        </Container>
    );
  }
};

const styles = StyleSheet.create({

});