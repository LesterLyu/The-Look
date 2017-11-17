
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

import styles from '../MainScreen/styles';

const thumbnail = require("../../imgs/1.jpeg");
const thumbnail2 = require("../../imgs/2.jpeg");


const datas = [
    {
        img: thumbnail,
        text: "Vivamus",
        note: "Lorem ipsum dolor sit amet.",
        price: "59.99"
    },
    {
        img: thumbnail,
        text: "Morbi laoreet leo",
        note: "Proin ornare ante erat, efficitur molestie metus venenatis eget.",
        price: "50.99"
    },
    {
        img: thumbnail2,
        text: "Sed viverra",
        note: "Etiam quis gravida justo, a lobortis risus. Maecenas eu dui et arcu lobortis suscipit. ",
        price: "84.99"
    },
];


class SuitDetailPage extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            basic: true,
            listViewData: datas,
            dataSource: this.ds.cloneWithRows(datas)
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
        //const {navigate} = this.props.navigation;
        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <Container style={styles.container}>

                <Content>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(data, secId, rowId, rowMap) =>
                            <ListItem thumbnail onPress={() => this.props.navigation.navigate("ItemDetailPage")}>
                                <Left style={{flex:0.2}}>
                                    <Thumbnail square size={110} source={data.img} />
                                </Left>
                                <Body style={{flex:1}}>

                                <Text style={{fontSize:14}}
                                >{data.text}</Text>
                                <Text numberOfLines={1}
                                      style={{fontSize:12}}
                                >{data.price}$</Text>
                                </Body>
                            </ListItem>}
                        rightOpenValue={-75}
                    />
                </Content>
            </Container>
        );
    }
}

export default SuitDetailPage;
