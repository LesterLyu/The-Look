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
import HomeScreen from "../HomeScreen";

export default class ProfilePage extends React.Component {
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
                    <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Text>Profile Page</Text>
                </Content>
            </Container>
        );
    }
}
