import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import {StyleSheet, View, Image, ListView, StatusBar, Alert} from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#2f2f2f",
        height: Constants.statusBarHeight,
    },
    form: {
        paddingTop: 30,
        paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
    gap: {
        height: 10
    },
    mainContainer: {
        //backgroundColor: "#2F2F2F",
    },
    // rest of the styles
});


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }

    _login = () => {
        if(this.state.username && this.state.password)
            return fetch('http://99.229.227.21:3000/api/authenticate/', {
                method: 'POST',
                redirect: 'follow',
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                }),
            }).then(resp => {
                return resp.json();
            }).then(data => {
                Alert.alert(data.msg);
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
        else
            Alert.alert("Please input username and password");
    };

    componentDidMount() {

    }

    render() {
        return (
            <Container style={styles.mainContainer}>
                <View style={styles.statusBar} />
                <StatusBar barStyle="light-content"/>

                <Image
                    source={require('./../../imgs/banner.png')}
                    style={{
                        width: null,
                        alignSelf: "stretch",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                </Image>

                <Content>
                    <Form style={styles.form}>

                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                onChangeText={(username) => this.setState({username})}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(password) => this.setState({password})}
                            />
                        </Item>
                    </Form>

                    <Button block info onPress={this._login}>
                        <Text>Sign in</Text>
                    </Button>
                    <View style={styles.gap}/>
                    <Button block success>
                        <Text>Register</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}