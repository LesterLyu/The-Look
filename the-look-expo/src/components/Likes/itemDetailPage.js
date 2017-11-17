import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {
    Body,
    Button,
    Checkbox,
    Container,
    Content,
    Footer,
    FooterTab,
    H1,
    H2,
    H3,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Thumbnail,
    Title,
} from 'native-base';

import CartPage from "../MainScreen/CartPage.js";

export default class Bananas extends Component {
    render() {
        let vans = {
            uri: 'https://images.vans.com/is/image/Vans/D3HY28-HERO'
        };

        return (
            <Container>
                <Header>

                    <Body>
                    <Title>Product</Title>
                    </Body>
                </Header>

                <ScrollView style={styles.scroll} contentContainerStyle={styles.center}>
                    <Image source={vans} style={{width: 300, height: 300, resizeMode: 'contain'}}/>
                    <View style={styles.product}>
                        <Text style={{fontSize: 30, marginTop: 10}}>Vans Classic Sneaker</Text>
                        <Text style={{fontSize: 20, marginTop: 10}}>$ 118</Text>
                        <Text style={{fontSize: 20, marginTop: 10, marginRight: 15}}>Vans The Old Skool, Vans classic
                            skate shoe and the first to bare the iconic side stripe, has a low-top lace-up silhouette
                            with a durable suede and canvas upper with padded tongue and lining and Vans signature
                            Waffle Outsole.</Text>
                    </View>

                </ScrollView>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'flex-start',
        //alignItems: 'center',
        marginTop: 10,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    product: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    product_inner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
});
