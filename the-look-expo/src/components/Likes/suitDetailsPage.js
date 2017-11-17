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

export default class DetailsPage extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Details</Title>
                    </Body>
                </Header>

                <Content padder>
                    <Text>Details Page</Text>
                </Content>

            </Container>
        );
    }
}
