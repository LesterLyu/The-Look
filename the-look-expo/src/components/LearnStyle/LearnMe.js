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
];

export default class LearnMe extends React.Component {

  render() {
	return (
	  <Container>
		<Header>
		  <Left>
			<Button
			  transparent
			  onPress={() => this.props.navigation.navigate("DrawerOpen")}
			>
			  <Icon name="menu" />
			</Button>
		  </Left>
		  <Body>
			<Title>Learn Me</Title>
		  </Body>
		  <Right />
		</Header>
        <View style={{flex: 1, padding: 10}}>
            <DeckSwiper ref={(mr) => this._deckSwiper = mr}
                        dataSource={cards}
                        looping={false}
                        renderEmpty={() =>
                            <View style={{alignSelf: 'center'}}>
                                <Button full rounded light
                                        style={{ marginTop: 10 }}
                                        onPress={() => this.props.navigation.navigate("Home")}
                                ><Text>Check out my styles!</Text></Button>
                            </View>}
                        renderItem={item =>
                            <Card style={{elevation: 2}}>
                                <CardItem cardBody>
                                    <Image style={{resizeMode: "cover", width: null, flex: 1, height: 400}} source={item.image} />
                                </CardItem>
                            </Card>}
            />
        </View>


        <View style={{flexDirection: "row", flex: 2, position: 'relative', left: 0, right: 0, justifyContent: 'space-between', padding: 10, paddingTop: 350}}>
            <Button iconLeft rounded danger large onPress={() => this._deckSwiper._root.swipeLeft()}>
                <Icon name="md-thumbs-down" />
                <Text>Dislike</Text>
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
