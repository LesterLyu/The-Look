import React, { Component } from "react";
import ProfilePage from "./ProfilePage.js";
import EditProfile from "./EditProfile.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
    ProfilePage: { screen: ProfilePage },
    EditProfile: { screen: EditProfile }
}));
