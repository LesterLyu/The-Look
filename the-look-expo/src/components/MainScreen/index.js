import React from "react";
import StylesPage from "./StylesPage.js";
import CartPage from "./CartPage.js";
import LikesPage from "./LikesPage.js";
import ProfilePage from "../ProfilePage/index.js";
import ProductPage from "./ProductPage.js";
import DetailsPage from "./DetailsPage.js";

import {TabNavigator} from "react-navigation";

import {Button, Footer, FooterTab, Icon, Item, Label, Text} from "native-base";

export default (MainScreenNavigator = TabNavigator(
    {
        StylesPage: {screen: StylesPage},
        LikesPage: {screen: LikesPage},
        CartPage: {screen: CartPage},
        ProfilePage: {screen: ProfilePage},
        ProductPage: {screen: ProductPage},
        DetailsPage: {screen: DetailsPage}
    },
    {
        swipeEnabled:false,
        scrollEnabled: true,
        backBehavior: false,
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
                            <Icon name="body"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("LikesPage")}
                        >
                            <Icon name="heart"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("CartPage")}
                        >
                            <Icon name="cart"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 3}
                            onPress={() => props.navigation.navigate("ProfilePage")}
                        >
                            <Icon name="person"/>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
));
