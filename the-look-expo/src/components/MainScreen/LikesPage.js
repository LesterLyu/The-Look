import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default class LikesPage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
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
            <Title>Likes</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Text>Likes Page</Text>
          </Content>
        </Container>
    );
  }
}
