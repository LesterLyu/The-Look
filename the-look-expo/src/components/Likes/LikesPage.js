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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("suitDetailsPage")}>
                      <Image source={s1} style={styles.styleImage}/>
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center', fontSize: 20}}>STYLE 1 </Text>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                    <Image source={s2} style={styles.styleImage}/>
                    <Text style={{textAlign: 'center', fontSize: 20}}>STYLE 1 </Text>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                    <Image source={s3} style={styles.styleImage}/>
                    <Text style={{textAlign: 'center', fontSize: 20}}>STYLE 1 </Text>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                    <Image source={s4} style={styles.styleImage}/>
                    <Text style={{textAlign: 'center', fontSize: 20}}>STYLE 1 </Text>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                    <Image source={s5} style={styles.styleImage}/>
                    <Text style={{textAlign: 'center', fontSize: 20}}>STYLE 1 </Text>
                  </Col>
                </Grid>
                <Grid>
                  <Col>
                    <Image source={s6} style={styles.styleImage}/>
                    <Text style={{textAlign: 'center', fontSize: 20}}>STYLE 1 </Text>
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