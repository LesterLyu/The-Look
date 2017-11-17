import React from "react";
import { StatusBar, View, Image } from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    DeckSwiper,
} from "native-base";

const card1 = require("../../imgs/1.jpeg");
const card2 = require("../../imgs/2.jpeg");
const card3 = require("../../imgs/3.jpeg");
const card4 = require("../../imgs/4.jpeg");
const card5 = require("../../imgs/5.jpeg");
const card6 = require("../../imgs/6.jpeg");
const card7 = require("../../imgs/7.jpeg");

const cards = [
    {
        text: "1",
        name: "1",
        image: card1
    },
    {
        text: "2",
        name: "2",
        image: card2
    },
    {
        text: "3",
        name: "3",
        image: card3
    },
    {
        text: "4",
        name: "4",
        image: card4
    },
    {
        text: "5",
        name: "5",
        image: card5
    },
    {
        text: "6",
        name: "6",
        image: card6
    },
    {
        text: "7",
        name: "7",
        image: card7
    }
];

export default class LearnMe extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Styles</Title>
                    </Body>
                </Header>
                <View style={{flex: 1, padding: 10}}>
                    <DeckSwiper ref={(mr) => this._deckSwiper = mr}
                                dataSource={cards}
                                looping={true}
                                renderItem={item =>
                                    <Card style={{elevation: 2}}>
                                        <CardItem cardBody>
                                            <Image style={{resizeMode: "cover", width: null, flexDirection:"column",flex: 1, height:500}} source={item.image} />
                                        </CardItem>
                                    </Card>}
                    />
                </View>


                <View style={{flexDirection: "row", flex: 0.8, position: 'relative', left: 5, right: 5, justifyContent: 'space-between', padding: 10, paddingBottom: 30, paddingTop: 450}}>
                    <Button iconLeft rounded danger large onPress={() => this._deckSwiper._root.swipeLeft()}>
                        <Icon name="md-thumbs-down" />
                        <Text>Pass</Text>
                    </Button>
                    <Button iconRight rounded success large onPress={() => this._deckSwiper._root.swipeRight()}>
                        <Text>Like</Text>
                        <Icon name="md-thumbs-up" />
                    </Button>
                </View>

            </Container>
        );
    }
}
