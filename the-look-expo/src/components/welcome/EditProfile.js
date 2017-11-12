import React from "react";
import { AppRegistry, View, StatusBar, Image, StyleSheet, TouchableOpacity } from "react-native";
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
import { Constants } from 'expo';

const bellyOptions = ["HAVE BELLY", "NO BELLY"];

const shoulderOptions = ["RECTANGLE SHOULDER", "ROUND SHOULDER"];

const legOptions = ["NORMAL LEG", "SKINNY LEG", "MUSCULAR LEG"];

const heightOptions = ["HEIGHT >188CM ", "HEIGHT 175-188CM", "HEIGHT <175cm"];

const neckOptions = ["NORMAL NECK", "LONG NECK", "SHORT NECK"];

const bodyOptions = ["MUSCULAR BODY", "CHUBBY BODY", "NORMAL BODY", "SKINNY BODY"];


export default class EditProfile extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>Edit Profile</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    constructor() {
        super();
        this.state = {
            belly: 0,
            shoulder: 0,
            leg: 0,
            height: 0,
            neck: 0,
            body: 0
        };
    }

    render() {
        return (
            <Container>

                <Content padder>
                    <Grid>
                        <Col>
                            <TouchableOpacity style={styles.box1} onPress={() => {this.setState({belly: (this.state.belly + 1) % bellyOptions.length})}}>
                                <Text style={styles.text}>
                                    { bellyOptions[this.state.belly] }
                                </Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={styles.box2} onPress={() => {this.setState({shoulder: (this.state.shoulder + 1) % shoulderOptions.length})}}>
                                <Text style={styles.text}>
                                    { shoulderOptions[this.state.shoulder] }
                                </Text>
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <TouchableOpacity style={styles.box2} onPress={() => {this.setState({leg: (this.state.leg + 1) % legOptions.length})}}>
                                <Text style={styles.text}>
                                    { legOptions[this.state.leg] }
                                </Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={styles.box1} onPress={() => {this.setState({height: (this.state.height + 1) % heightOptions.length})}}>
                                <Text style={styles.text}>
                                    { heightOptions[this.state.height] }
                                </Text>
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <TouchableOpacity style={styles.box1} onPress={() => {this.setState({neck: (this.state.neck + 1) % neckOptions.length})}}>
                                <Text style={styles.text}>
                                    { neckOptions[this.state.neck] }
                                </Text>
                            </TouchableOpacity>
                        </Col>
                        <Col>
                            <TouchableOpacity style={styles.box2} onPress={() => {this.setState({body: (this.state.body + 1) % bodyOptions.length})}}>
                                <Text style={styles.text}>
                                    { bodyOptions[this.state.body] }
                                </Text>
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <Button full rounded light
                                    style={{ marginTop: 10, marginBottom: 20}} onPress={() => this.props.navigation.navigate("HomeScreen")}>
                                <Text>THAT'S ME</Text>
                            </Button>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#2f2f2f",
        height: Constants.statusBarHeight,
    },
    box1:{
        flex: 1,
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#3b5998',
        height: 180,
        //alignItems: 'center',
        justifyContent: 'center'
    },
    box2: {
        flex: 1,
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#0288c9',
        height: 180,
        //alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'top',
        color: "#ffffff"
    },
});