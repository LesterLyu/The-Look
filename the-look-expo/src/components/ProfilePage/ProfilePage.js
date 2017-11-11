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
    List,
    ListItem,
    Switch,
    Separator
} from "native-base";
import HomeScreen from "../LearnStyle/index";

const logo = require("../../imgs/logo.png");
const cardImage = require("../../imgs/banner.png");

const avatar = require("../../imgs/avatar.jpeg");

class ProfilePage extends React.Component {


    render() {
        const { navigate } = this.props.navigation;
        return (
            <Content padder style={{backgroundColor: "#ffffff"}}>
                <Text style={{fontSize: 30, textAlign: 'left'}}>Your Profile</Text>

                <Thumbnail style={{alignSelf: 'center', marginTop: 30}} large source={avatar} />

                <Button full rounded light
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate("EditProfile")}
                >
                    <Text>Edit Profile</Text>
                </Button>



            </Content>
        );
    }
}

ProfilePage.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Profile</Title>
            </Body>
            <Right />
        </Header>
    )
});

export default ProfilePage;