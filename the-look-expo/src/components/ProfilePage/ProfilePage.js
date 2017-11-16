import React from "react";
import { AppRegistry, View, StatusBar, Image, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';
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

                <Thumbnail style={{alignSelf: 'center', marginTop: 30}} large source={avatar} />
                <View style={{alignItems: 'center', flex: 1, flexDirection: 'column'}}>
                    <View>
                        <Text>Casual</Text>
                        <Progress.Bar style={styles.progressBar} progress={0.4} size={200} width={300} height={20}/>
                    </View>
                    <View>
                        <Text>Casual</Text>
                        <Progress.Bar style={styles.progressBar} progress={0.8} size={200} width={300} height={20}/>
                    </View>
                    <View>
                        <Text>Casual</Text>
                        <Progress.Bar style={styles.progressBar} progress={0.2} size={200} width={300} height={20}/>
                    </View>
                    <View>
                        <Text>Casual</Text>
                        <Progress.Bar style={styles.progressBar} progress={0.6} size={200} width={300} height={20}/>
                    </View>
                </View>

                <Button full rounded light
                        style={{ marginTop: 10 }}
                >
                    <Text>Clean style data</Text>
                </Button>

                <Button full rounded light
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate("EditProfile", {from: "profilePage"})}
                >
                    <Text>Body profile</Text>
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

const styles = StyleSheet.create({
    progressBar: {
        alignSelf: 'center',
        margin: 10,
    }
});

export default ProfilePage;