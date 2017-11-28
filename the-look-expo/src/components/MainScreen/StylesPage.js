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
  _like = () => {
      this._deckSwiper._root.swipeRight();
      alert("Like");
  };
  _pass = () => {
      this._deckSwiper._root.swipeLeft();
      alert("Pass");
  };
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Styles</Title>
                    </Body>
                </Header>
                <View style={{flex: 0.85, padding: 10}}>
                    <DeckSwiper ref={(mr) => this._deckSwiper = mr}
                                dataSource={cards}
                                looping={true}
                                renderItem={item =>
                                    <Card style={{elevation: 5}}>
                                        <CardItem cardBody>
                                            <Image style={{resizeMode: "cover", width:390, height: 500}} source={item.image} />
                                        </CardItem>
                                    </Card>}
                    />
                </View>


                <View style={{flexDirection: "row", flex: 0.15, position: 'absolute', bottom:15, left: 15, right: 15, justifyContent: 'space-between'}}>
                    <Button iconLeft rounded danger large onPress={this._pass}>
                        <Icon name="md-thumbs-down" />
                        <Text>Pass</Text>
                    </Button>
                    <Button iconRight rounded success large onPress={this._like}>
                        <Text>Like</Text>
                        <Icon name="md-thumbs-up" />
                    </Button>
                </View>

            </Container>
        );
    }
}
