
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

const image1 = require("../../imgs/styles/6/Uniqlo-Black-Shirt.jpg");
const image2 = require("../../imgs/styles/6/Levis.jpg");
const image3 = require("../../imgs/styles/6/Schott.jpg");
const image4 = require("../../imgs/styles/6/Supreme-Plain-Logo-Shirt.png");
const image5 = require("../../imgs/styles/6/Zara-Leather-Jacket.jpg");
const image6 = require("../../imgs/styles/6/Levis501.jpg");
const image7 = require("../../imgs/styles/6/Saint-Laurent-Signature-Biker-Jacket.jpg");
const image8 = require("../../imgs/styles/6/Diesel-Sleenker.jpg")

const datas = [
    {
        id: 1,
        image: image1,
        name: 'Uniqlo Black Shirt',
        price: 15,
        amountTaken: 1
    }, {
        id: 2,
        image: image2,
        name: 'Levis 501',
        price: 398,
        amountTaken: 1
    }, {
        id: 3,
        image: image3,
        name: 'Schott',
        price: 78,
        amountTaken: 1
    }, {
        id: 4,
        image: image4,
        name: 'Supreme Plain Logo Shirt',
        price: 780,
        amountTaken: 1
    }, {
        id: 5,
        image: image5,
        name: 'Zara Leather Jacket',
        price: 200,
        amountTaken: 1
    }, {
        id: 6,
        image: image6,
        name: 'Levis Pants',
        price: 200,
        amountTaken: 1
    }, {
        id: 7,
        image: image7,
        name: 'Saint Laurent Signature Biker Jacket',
        price: 200,
        amountTaken: 1
    }, {
        id: 8,
        image: image8,
        name: 'Diesel Sleenker',
        price: 200,
        amountTaken: 1
    },
];

// const datas = [
//     {
//         img: thumbnail,
//         text: "Vivamus",
//         note: "Lorem ipsum dolor sit amet.",
//         price: "59.99"
//     },
//     {
//         img: thumbnail,
//         text: "Morbi laoreet leo",
//         note: "Proin ornare ante erat, efficitur molestie metus venenatis eget.",
//         price: "50.99"
//     },
//     {
//         img: thumbnail2,
//         text: "Sed viverra",
//         note: "Etiam quis gravida justo, a lobortis risus. Maecenas eu dui et arcu lobortis suscipit. ",
//         price: "84.99"
//     },
// ];



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
                                    <Thumbnail square size={110} source={data.image} />
                                </Left>
                                <Body style={{flex:1}}>

                                <Text style={{fontSize:14}}
                                >{data.text}</Text>
                                <Text numberOfLines={1}
                                      style={{fontSize:12}}
                                >{data.name} ${data.price}</Text>
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
