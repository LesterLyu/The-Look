import React, { Component } from 'react';
import { ListView } from 'react-native';

import {
	Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Thumbnail,
  Image,
  List,
  ListItem,
  H1,
  H2,
  H3,
  Text,
  Body,
  Left,
  Right,
  Icon,
  View
} from 'native-base';

import styles from './styles';

const nail = require("../../imgs/1.jpeg");
const nail2 = require("../../imgs/2.jpeg");


const datas = [
  {
    img: nail,
    text: "Outfit1",
    note: "Outfit1 description",
    price: "4.99"
  },
  {
    img: nail,
    text: "Outfit2",
    note: "Outfit2 description",
    price: "10.99"
  },
	{
		img: nail2,
		text: "Outfit3",
		note: "Outfit3 description",
		price: "4.99"
	},
];



class MultiListSwipe extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			basic: true,
			listViewData: datas,
		};
	}
	toggleTab1() {
		this.setState({
			tab1: true,
			tab2: false,
			tab3: false,
			tab4: false
		});
	}

	toggleTab2() {
		this.setState({
			tab1: false,
			tab2: true,
			tab3: false,
			tab4: false
		});
	}

	toggleTab3() {
		this.setState({
			tab1: false,
			tab2: false,
			tab3: true,
			tab4: false
		});
	}

	toggleTab4() {
		this.setState({
			tab1: false,
			tab2: false,
			tab3: false,
			tab4: true
		});
	}

	deleteRow(secId, rowId, rowMap) {
		rowMap[`${secId}${rowId}`].props.closeRow();
		const newData = [...this.state.listViewData];
		newData.splice(rowId, 1);
		this.setState({ listViewData: newData });
	}
	render() {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		return (
			<Container style={styles.container}>
			<Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Shopping Cart</Title>
        </Body>
        <Right>
          <Button transparent><Icon name="cart" /></Button>
          <Button transparent><Icon name="heart" /></Button>
        </Right>

      </Header>

				<Content>
					<List
						dataSource={this.ds.cloneWithRows(this.state.listViewData)}
						renderRow={data =>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square size={110} source={data.img} />
                </Left>
                <Body>
                  <Text onPress={() => props.navigation.navigate("ProductPage")}>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                  <Text numberOfLines={1} style={{ color: '#F00' }} note>{data.price}</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>}
						renderLeftHiddenRow={data =>
							<Button
								full
								onPress={() => alert(data)}
								style={{
									backgroundColor: '#6e9fef',
									flex: 1,
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Text>View</Text>
							</Button>}
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
								<Icon active name="trash" />
							</Button>}
						leftOpenValue={75}
						rightOpenValue={-75}
					/>
					<Button block danger style={styles.mb15}><Text>Checkout</Text></Button>
				</Content>
				<Footer/>
			</Container>
		);
	}
}

export default MultiListSwipe;
