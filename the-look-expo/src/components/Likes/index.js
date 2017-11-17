import React, { Component } from "react";

import LikesPage from "./LikesPage";
import suitDetailsPage from "./suitDetailsPage";
import itemDetailPage from "./itemDetailPage.js";
import { StackNavigator } from "react-navigation";

export default (Likes = StackNavigator({
    LikesPage: {
        screen: LikesPage,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    suitDetailsPage: { screen: suitDetailsPage,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    itemDetailPage: { screen: itemDetailPage,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
}));
