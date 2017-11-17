import React from "react";
import { StatusBar, View, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import {
    Body,
    Button,
    Card,
    CardItem,
    Col,
    Container,
    Content,
    Footer,
    FooterTab,
    Grid,
    Header,
    Icon,
    Input,
    InputGroup,
    Item,
    Label,
    Left,
    Right,
    Tab,
    Tabs,
    Text,
    Thumbnail,
    Title,
} from "native-base";

const s1 = require("../../imgs/corporate.jpg");
const s2 = require("../../imgs/hiphop.jpg");
const s3 = require("../../imgs/jock.jpg");
const s4 = require("../../imgs/popstar.jpg");
const s5 = require("../../imgs/rockstar.jpg");
const s6 = require("../../imgs/throwback.jpg");

class StyleSection extends React.Component {
    constructor(props) {
        super();
        this.state = {
            descriptions: props.descriptions, // e.g. ["NO BELLY", "THIN BELLY", "FAT BELLY"]
            image: props.image,
            navigation: props.navigation
        };
    }

    render() {

        return (
            <View>
                <TouchableOpacity onPress={() => this.state.navigation.navigate("suitDetailsPage")}>
                    <Image source={this.state.image} style={styles.styleImage} navigation={this.props.navigation}/>
                </TouchableOpacity>
                <Text style={{textAlign: 'center', fontSize: 20}}>{this.state.descriptions}</Text>
            </View>
        );
    };
}


export default class LikesPage extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
              <Header>

                <Body>
                <Title>Likes</Title>
                </Body>
              </Header>
              <Content padder style={{backgroundColor: "#ffffff"}}>
                <Grid>
                  <Col>
                      <StyleSection descriptions={'style 1'} image={s1}/>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                      <StyleSection descriptions={'style 1'} image={s2}/>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                      <StyleSection descriptions={'style 1'} image={s3}/>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                      <StyleSection descriptions={'style 1'} image={s4}/>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                      <StyleSection descriptions={'style 1'} image={s5}/>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                      <StyleSection descriptions={'style 1'} image={s6}/>
                  </Col>
                </Grid>

              </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    styleImage:{
        flexDirection:"column",
        flex: 0.3,
        width: null,
        resizeMode: 'cover',
        height: 300,
        margin: 5,
        borderRadius: 20,
        justifyContent: 'center'
    }
});