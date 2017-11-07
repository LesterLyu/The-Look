import React, { Component } from 'react';
import { Text, Container, Header, Content, Icon } from 'native-base';
import { TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const bellyOptions = ["HAS BELLY", "NO BELLY"];
const bellyImages = [require('../../images/belly.png'), require('../../images/nobelly.png')];

const shoulderOptions = ["RECTANGLE SHOULDER", "ROUND SHOULDER"];

const legOptions = ["NORMAL LEG", "SKINNY LEG", "MUSCULAR LEG"];

const heightOptions = [">188", "175-188", "<175"];

const neckOptions = ["MUSCULAR NECK", "NORMAL", "LONG", "SHORT"];

const bodyOptions = ["MUSCULAR", "CHUBBY", "NORMAL", "SKINNY"];

export default class Profile extends Component {
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
                <Content>
                    <Grid>
                        <Col>
                            <TouchableOpacity style={styles.box1} onPress={() => {this.setState({belly: (this.state.belly + 1) % bellyOptions.length})}}>
                                <Image source={bellyImages[this.state.belly]}/>
                                <Text>
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
                            <TouchableOpacity style={styles.yes}>
                                <Icon name='ios-checkmark-circle-outline' />
                            </TouchableOpacity>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        )
    }
}

function submitProfile() {
    console.log("submit");
}

const styles = StyleSheet.create({
    box1:{
        flex: 1,
        margin: 5,
        borderRadius: 25,
        backgroundColor: '#60a3b1',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box2: {
        flex: 1,
        margin: 5,
        borderRadius: 25,
        backgroundColor: '#8ae5a4',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center'
    },
    yes: {
        flex: 1,
        margin: 5,
        borderRadius: 25,
        backgroundColor: '#e59dc5',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});