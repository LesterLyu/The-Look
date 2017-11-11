import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { StyleSheet, View, Image, ListView } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#C2185B",
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
    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Container style={styles.mainContainer}>
                <View style={styles.statusBar} />

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

                    <Button block info>
                        <Text>Sign in</Text>
                        {/*onPress={onPressLearnMore}*/}
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