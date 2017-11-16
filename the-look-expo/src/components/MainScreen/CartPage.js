import React, {Component} from 'react';
import {ListView} from 'react-native';

import {
    Body,
    Button,
    Checkbox,
    Container,
    Content,
    Footer,
    FooterTab,
    H1,
    H2,
    H3,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail,
    Title,
    View
} from 'native-base';

import styles from './styles';

const thumbnail = require("../../imgs/1.jpeg");
const thumbnail2 = require("../../imgs/2.jpeg");


const datas = [
    {
        img: thumbnail,
        text: "Vivamus",
        note: "Lorem ipsum dolor sit amet.",
        quantity: 2,
        price: "59.99"
    },
    {
        img: thumbnail,
        text: "Morbi laoreet leo vita",
        note: "Proin ornare ante erat, efficitur molestie metus venenatis eget.",
        quantity: 4,
        price: "50.99"
    },
    {
        img: thumbnail2,
        text: "Sed viverra ipsum",
        note: "Etiam quis gravida justo, a lobortis risus. Maecenas eu dui et arcu lobortis suscipit. ",
        quantity: 4,
        price: "84.99"
    },
];


class MultiListSwipe extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            basic: true,
            listViewData: datas,
        };
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({listViewData: newData});
    }

    closeRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
    }

    render() {

        const {navigate} = this.props.navigation;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Shopping Cart</Title>
                    </Body>
                    <Right/>

                </Header>

                <Content>
                    <List
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={(data, secId, rowId, rowMap) =>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square size={110} source={data.img}/>
                                </Left>
                                <Body>
                                <H3 style={{color: 'blue', textDecorationLine: 'underline'}}
                                    onPress={() => this.props.navigation.navigate("ProductPage")}
                                >{data.text}</H3>
                                <Text numberOfLines={1} onPress={_ => this.closeRow(secId, rowId, rowMap)}
                                      note>{data.note}</Text>
                                <Text numberOfLines={1} onPress={_ => this.closeRow(secId, rowId, rowMap)}
                                      style={{color: '#F00'}} note
                                >{data.price}$</Text>
                                </Body>
                                <Right>
                                  <Left>
                                    <Button style={{height: 18}} info><Text> + </Text></Button>
                                  </Left>
                                  <Body>
                                    <Text>{data.quantity}</Text>
                                  </Body>
                                  <Right>
                                    <Button style={{height: 18}} info><Text> - </Text></Button>
                                  </Right>
                                </Right>
                            </ListItem>}
                        renderLeftHiddenRow={data => null}
                        disableRightSwipe={true}
                        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                            <Button
                                full
                                danger
                                onPress={_ => this.deleteRow(secId, rowId, rowMap)}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon active name="trash"/>
                            </Button>}
                        rightOpenValue={-75}
                    />

                    <Button block danger style={styles.mb}><Text>Checkout</Text></Button>
                </Content>
            </Container>
        );
    }
}

export default MultiListSwipe;
