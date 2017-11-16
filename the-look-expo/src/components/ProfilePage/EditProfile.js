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

const skinColor = ["WHITE", "YELLOW", "BROWN", "BLACK"];
const skinColorImg = [require("../../imgs/profile/skinColor/color-0.png"),
    require("../../imgs/profile/skinColor/color-1.png"), require("../../imgs/profile/skinColor/color-2.png"),
    require("../../imgs/profile/skinColor/color-3.png")];

const belly = ["NO BELLY", "THIN BELLY", "FAT BELLY"];
const bellyImg = [require("../../imgs/profile/belly/belly-0.png"),
    require("../../imgs/profile/belly/belly-1.png"),
    require("../../imgs/profile/belly/belly-2.png")];

const shoulderShape = ["RECTANGLE SHOULDER", "ROUND SHOULDER"];
const shoulderShapeImg = [require("../../imgs/profile/shoulderShape/shoulder-0.png"),
    require("../../imgs/profile/shoulderShape/shoulder-1.png")];

const legShape = ["NO EDGE LEG", "NORMAL LEG", "SKINNY LEG", "MUSCULAR LEG"];
const legShapeImg = [require("../../imgs/profile/legShape/leg-0.png"),
    require("../../imgs/profile/legShape/leg-1.png"),
    require("../../imgs/profile/legShape/leg-2.png"),
    require("../../imgs/profile/legShape/leg-3.png")];

const legTorsoRatio = ["LONG TORSO", "EQUAL", "LONG LEG"];
const legTorsoRatioImg = [require("../../imgs/profile/legTorsoRatio/ratio-0.png"),
    require("../../imgs/profile/legTorsoRatio/ratio-1.png"),
    require("../../imgs/profile/legTorsoRatio/ratio-2.png")];

const bodyShape = ["SKINNY BODY", "NORMAL BODY", "MUSCULAR BODY", "CHUBBY BODY"];
const bodyShapeImg = [require("../../imgs/profile/bodyShape/shape-0.png"),
    require("../../imgs/profile/bodyShape/shape-1.png"),
    require("../../imgs/profile/bodyShape/shape-2.png"),
    require("../../imgs/profile/bodyShape/shape-3.png")];

const atLength = ["LOW", "MIDDLE", "HIGH"];
const atLengthImg = [require("../../imgs/profile/atLength/at-0.png"),
    require("../../imgs/profile/atLength/at-1.png"),
    require("../../imgs/profile/atLength/at-2.png")];

const height = [">188\nCM", "175-188\nCM", "<175\nCM"];

const neckType = ["NORMAL NECK", "LONG NECK", "SHORT NECK"];
const neckTypeImg = [require("../../imgs/profile/neckType/neck-0.png"),
    require("../../imgs/profile/neckType/neck-1.png"),
    require("../../imgs/profile/neckType/neck-2.png")];


class ProfileButton extends React.Component {

    constructor(props) {
        super();
        this.state = {
            type: props.type,
            descriptions: props.descriptions, // e.g. ["NO BELLY", "THIN BELLY", "FAT BELLY"]
            currentIndex: 0,
        };

        if(props.type === 'image') {
            this.state.images = props.images
        }
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.boxNone}
                onPress={ () => {
                    this.setState({currentIndex: (this.state.currentIndex + 1) % this.state.descriptions.length})
                }} >

                { this.state.type === 'image' &&
                    <Image style={styles.image} source={this.state.images[this.state.currentIndex]}>
                        <Text style={styles.text}>
                            { this.state.descriptions[this.state.currentIndex] }
                        </Text>
                    </Image>
                }
                { this.state.type !== 'image' &&
                    <Text style={styles.textOnly}>
                        { this.state.descriptions[this.state.currentIndex] }
                    </Text>
                }
            </TouchableOpacity>
        );
    }
}


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

    constructor(params) {
        super();
        this.state = {
            belly: 0,
            shoulder: 0,
            leg: 0,
            height: 0,
            neck: 0,
            body: 0,
            skinColor: 0,
            legTorsoRatio: 0,
            atLength: 0
        };
        if(params.from === 'login') {
            this.state.next = 'HomeScreen';
        }
        else if(params.from === 'profilePage'){
            this.state.next = 'ProfilePage';
        }
    }

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content padder>
                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={skinColor} images={skinColorImg}/>
                        </Col>
                        <Col>
                            <ProfileButton type={'image'} descriptions={legTorsoRatio} images={legTorsoRatioImg}/>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={belly} images={bellyImg}/>
                        </Col>
                        <Col>
                            <ProfileButton type={'image'} descriptions={shoulderShape} images={shoulderShapeImg}/>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={legShape} images={legShapeImg}/>
                        </Col>
                        <Col>
                            <ProfileButton descriptions={height}/>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={neckType} images={neckTypeImg}/>
                        </Col>
                        <Col>
                            <ProfileButton type={'image'} descriptions={bodyShape} images={bodyShapeImg}/>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <ProfileButton type={'image'} descriptions={atLength} images={atLengthImg}/>
                        </Col>
                        <Col>
                            <View style={styles.boxNone}/>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col>
                            <Button full rounded light
                                    style={{ marginTop: 10, marginBottom: 20}} onPress={() => this.props.navigation.navigate("ProfilePage")}>
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
    boxNone:{
        flex: 1,
        margin: 5,
        borderRadius: 20,
        height: 180,
        //alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        color: "#ffffff",
        flex: 1
    },
    textOnly: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'top',
        color: "#4C5B73",
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        borderRadius: 20,
    },
});