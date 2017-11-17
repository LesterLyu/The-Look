import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback, Alert } from 'react-native';
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

const image1 = require("../../imgs/styles/6/Uniqlo-Black-Shirt.jpg");
const image2 = require("../../imgs/styles/6/Levis.jpg");
const image3 = require("../../imgs/styles/6/Schott.jpg");
const image4 = require("../../imgs/styles/6/Supreme-Plain-Logo-Shirt.png");
const image5 = require("../../imgs/styles/6/Zara-Leather-Jacket.jpg");


let data = [
    {
        id: 1,
        image: image1,
        name: 'Uniqlo Black Shirt',
        price: 15,
        amountTaken: 1
    }, {
        id: 2,
        image: image2,
        name: 'Levis 501',
        price: 398,
        amountTaken: 1
    }, {
        id: 3,
        image: image3,
        name: 'Schott',
        price: 78,
        amountTaken: 1
    }, {
        id: 4,
        image: image4,
        name: 'Supreme Plain Logo Shirt',
        price: 780,
        amountTaken: 1
    }, {
        id: 5,
        image: image5,
        name: 'Zara Leather Jacket',
        price: 6800,
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

        this.state = {
            amount: item.amountTaken
        };

        return (
            <TouchableWithoutFeedback>
                <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
                    <Image source={item.image} style={imageStyle}/>
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

                        <Text>{this.state.amount}</Text>

                        <Icon.Button
                            name="ios-add"
                            size={25}
                            color='#fff'
                            backgroundColor='#fff'
                            style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
                            iconStyle={{ marginRight: 0 }}
                        />

                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    _checkout = () => {
        Alert.alert("Your order has been placed!");
    };

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

                <Button block dark onPress={this._checkout}><Text style={{color: '#ffffff'}}>Checkout</Text></Button>
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
