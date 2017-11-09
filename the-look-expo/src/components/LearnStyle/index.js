import React, { Component } from "react";
import LearnMe from "./LearnMe.js";
import MainScreenNavigator from "../MainScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: MainScreenNavigator },
    LearnMe: { screen: LearnMe },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;
