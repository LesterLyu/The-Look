import React, { Component } from "react";
import { Platform, StatusBar } from 'react-native';
import EditProfile from "./EditProfile.js";
import Login from "./login.js";
import { StackNavigator } from "react-navigation";
import HomeScreen from "../LearnStyle/index";

export default (WelcomeNav = StackNavigator({
    Login: {
        screen: Login,
        // https://reactnavigation.org/docs/navigators/stack
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    EditProfile: {
        screen: EditProfile
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            header: null,
            gesturesEnabled: false,
        }),
    }

    }, {
        cardStyle: {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
    }
));
