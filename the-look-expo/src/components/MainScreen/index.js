import React, { Component } from "react";
import StylesPage from "./StylesPage.js";
import CartPage from "./CartPage.js";
import LikesPage from "./LikesPage.js";
import ProfilePage from "./ProfilePage";

import { TabNavigator } from "react-navigation";

import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default (MainScreenNavigator = TabNavigator(
  {
    StylesPage: { screen: StylesPage },
    LikesPage: { screen: LikesPage },
    CartPage: { screen: CartPage },
    ProfilePage: { screen: ProfilePage }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("StylesPage")}
            >
              <Icon name="body" />
              <Text>Styles</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("LikesPage")}
            >
              <Icon name="archive" />
              <Text>Likes</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("CartPage")}
            >
              <Icon name="cart" />
              <Text>Cart</Text>
            </Button>
            <Button
                vertical
                active={props.navigationState.index === 3}
                onPress={() => props.navigation.navigate("ProfilePage")}
            >
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
