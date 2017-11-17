import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    Left,
    List,
    ListItem,
    Right,
    Thumbnail,
    Title,
} from 'native-base';

// import styles from './styles';

const thumbnail1 = require("../../imgs/1.jpeg");
const thumbnail2 = require("../../imgs/2.jpeg");
const thumbnail3 = require("../../imgs/3.jpeg");

const datas = [
    {
        img: thumbnail1,
        quantity: 2,
        price: "59.99"
    },
    {
        img: thumbnail2,
        quantity: 4,
        price: "50.99"
    },
    {
        img: thumbnail3,
        quantity: 4,
        price: "84.99"
    },
];

const image1 = require("../../imgs/1.jpeg");
const image2 = require("../../imgs/2.jpeg");
const image3 = require("../../imgs/3.jpeg");
const image4 = require("../../imgs/4.jpeg");
const image5 = require("../../imgs/popstar.jpg");


const data = [
    {
        id: 1,
        image: image1,
        name: 'Orange',
        price: 10,
        amountTaken: 3
    }, {
        id: 2,
        image: image2,
        name: 'Tomato',
        price: 5,
        amountTaken: 4
    }, {
        id: 3,
        image: image3,
        name: 'Salmon fillet',
        price: 16,
        amountTaken: 2
    }, {
        id: 4,
        image: image4,
        name: 'Greens',
        price: 3,
        amountTaken: 3
    }, {
        id: 5,
        image: image5,
        name: 'Rye Bread',
        price: 20,
        amountTaken: 1
    },
];


class CartPage extends Component {
    _renderItem({ item, index }) {
        const {
            containerStyle,
            lastItemStyle,
            imageStyle,
            textStyle,
            counterStyle,
            priceStyle } = styles;

        return (
            <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
                <Image source={item.image} style={imageStyle} />

                <View style={textStyle}>
                    <Text style={{ color: '#2e2f30' }}>{item.name}</Text>
                    <View style={priceStyle}>
                        <Text style={{ color: '#2e2f30', fontSize: 12 }}>${item.price}</Text>
                    </View>
                </View>

                <View style={counterStyle}>
                    <Icon.Button
                        name="ios-remove"
                        size={25}
                        color='#fff'
                        backgroundColor='#fff'
                        style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
                        iconStyle={{ marginRight: 0 }}
                    />

                    <Text>{item.amountTaken}</Text>

                    <Icon.Button
                        name="ios-add"
                        size={25}
                        color='#fff'
                        backgroundColor='#fff'
                        style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
                        iconStyle={{ marginRight: 0 }}
                    />

                </View>
            </View>);
    }


    render() {
        return (
            <Container>
                <Header>

                    <Body>
                    <Title>My Cart</Title>
                    </Body>
                </Header>

                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />

                <Button block dark><Text style={{color: '#ffffff'}}>Checkout</Text></Button>
            </Container>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    lastItemStyle: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        justifyContent: 'center'
    },
    priceStyle: {
        backgroundColor: '#ddd',
        width: 40,
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 3
    },
    counterStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
};

export default CartPage;
