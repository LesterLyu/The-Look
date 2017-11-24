import React from "react";
import Styles from "./StylesPage.js";
import Carts from "../CartPage/index";
import Likes from "../Likes/index";
import Profiles from "../ProfilePage/index.js";

import {TabNavigator} from "react-navigation";

import {Button, Footer, FooterTab, Icon, Item, Label, Text} from "native-base";

export default (MainScreenNavigator = TabNavigator(
    {
        Styles: {
            screen: Styles,
        },
        Likes: {screen: Likes},
        Carts: {screen: Carts},
        Profiles: {screen: Profiles},
    },
    {
        swipeEnabled:false,
        scrollEnabled: true,
        animationEnabled: true,
        tabBarPosition: "bottom",

        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'blue',
            },
        },


        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("Styles")}
                        >
                            <Icon name="shirt"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("Likes")}
                        >
                            <Icon name="heart"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 2}
                            onPress={() => props.navigation.navigate("Carts")}
                        >
                            <Icon name="cart"/>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 3}
                            onPress={() => props.navigation.navigate("Profiles")}
                        >
                            <Icon name="person"/>
                        </Button>
                    </FooterTab>
                </Footer>
            );

        }
    }
));
