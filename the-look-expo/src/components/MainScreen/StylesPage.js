import React from "react";
import { AppRegistry, View, StatusBar, Image } from "react-native";
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
    Label,
    Thumbnail,
    Grid,
    Col,
} from "native-base";
import HomeScreen from "../LearnStyle/index";

const logo = require("../../imgs/logo.png");
const cardImage = require("../../imgs/banner.png");

export default class StylesPage extends React.Component {
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
            <Title>Styles</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text style={{fontSize: 30, textAlign: 'left'}}>Styles for you</Text>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={logo} />
                        <Body>
                        <Text>NativeBase</Text>
                        <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>
                    <Image
                        style={{
                            resizeMode: "cover",
                            width: null,
                            height: 200,
                            flex: 1
                        }}
                        source={cardImage}
                    />
                </CardItem>

                <CardItem style={{ paddingVertical: 0 }}>
                    <Left>
                        <Button iconLeft transparent>
                            <Icon active name="thumbs-up" />
                            <Text>4923 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                    <Button iconLeft transparent>
                        <Icon active name="chatbubbles" />
                        <Text>89 Comments</Text>
                    </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}
