import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    Left,
    List,
    Right,
    Thumbnail,
    Title,
} from 'native-base';


const thumbnail = require("../../imgs/1.jpeg");
const thumbnail2 = require("../../imgs/2.jpeg");


const data = [
    {
        id: 1,
        img: thumbnail,
        name: "Vivamus",
        note: "Lorem ipsum dolor sit amet.",
        price: "59.99"
    },
    {
        id: 2,
        img: thumbnail,
        name: "Morbi laoreet leo",
        note: "Proin ornare ante erat, efficitur molestie metus venenatis eget.",
        price: "50.99"
    },
    {
        id: 3,
        img: thumbnail2,
        name: "Sed viverra",
        note: "Etiam quis gravida justo, a lobortis risus. Maecenas eu dui et arcu lobortis suscipit. ",
        price: "84.99"
    },
];


class ListItem extends React.PureComponent {
    _onPress = () => {
        this.state.navigation.navigate('ItemDetailPage');
    };

    constructor(props) {
        super();
        this.state = {
            index: props.index,
            item: props.item,
            navigation: props.navigation,
        };

        if(props.type === 'image') {
            this.state.images = props.images
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onPress()}>
                <View style={(this.state.index + 1 === data.length) ? styles.lastItemStyle : styles.containerStyle}>
                    <Image source={this.state.item.img} style={styles.imageStyle}/>
                    <View style={styles.textStyle}>
                        <Text style={{ color: '#2e2f30' }}>{this.state.item.name}</Text>
                        <View style={styles.priceStyle}>
                            <Text style={{ color: '#2e2f30', fontSize: 12 }}>${this.state.item.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


class SuitDetailPage extends Component {
    constructor(props) {
        super(props);
    }

    _showDetail = () => {
        console.log("pressed");
        this.props.navigation.navigate('ItemDetailPage');
    };

    _renderItem({ item, index }) {
        return (
            <ListItem item={item} index={index} navigation={this.props.navigation}/>
        );
    }

    render() {
        return (
            <Container>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />
            </Container>
        );
    }
}


const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#e2e2e2',
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    lastItemStyle: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 50,
        height: 50,
        marginRight: 20
    },
    textStyle: {
        flex: 2,
        justifyContent: 'center'
    },
    priceStyle: {
        backgroundColor: '#ddd',
        width: 60,
        alignItems: 'center',
        marginTop: 3,
        borderRadius: 3
    },
    counterStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
};

export default SuitDetailPage;
