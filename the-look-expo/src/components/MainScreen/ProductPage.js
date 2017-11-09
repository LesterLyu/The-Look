import React, { Component } from 'react';
import { AppRegistry, Image, View, ScrollView, StyleSheet, Text } from 'react-native';

import {
	Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Thumbnail,
	Checkbox,
  List,
  ListItem,
  H1,
  H2,
  H3,
  Body,
  Left,
  Right,
  Icon,
} from 'native-base';

import CartPage from "./CartPage.js";

export default class Bananas extends Component {
  render() {
    let vans = {
      uri: 'https://images.vans.com/is/image/Vans/D3HY28-HERO'
    }
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("CartPage")}
          >
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Product</Title>
        </Body>
        <Right/>

      </Header>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.center}>
        <Image source={vans} style={{width: 300, height: 300, resizeMode: 'contain'}}/>
        <View style={styles.product}>
        <Text style={{fontSize:30, marginTop: 10}}>Vans Classic Sneaker</Text>
        <Text style={{fontSize:20, marginTop: 10}}>$ 118</Text>
        <Text style={{fontSize:20, marginTop: 10, marginRight: 15}}>Vans The Old Skool, Vans classic skate shoe and the first to bare the iconic side stripe, has a low-top lace-up silhouette with a durable suede and canvas upper with padded tongue and lining and Vans signature Waffle Outsole.</Text>
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
    marginTop:100,
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
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
  product_inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
});
