import React, { Component } from 'react';
import { AppRegistry, Image, View, ScrollView, StyleSheet, Text } from 'react-native';
export default class Bananas extends Component {
  render() {
    let stylepic = {
      uri: 'https://i.pinimg.com/736x/f3/37/ee/f337ee2afc2f8b0d48f31dcce13f0336--outfits-for-men-fashion-outfits.jpg'
    };
    let denimjacketpic = {
      uri: 'https://cdn.shopify.com/s/files/1/0605/4293/products/Levis_046a_1110x.progressive.jpg?v=1500572521'
    }
    let denimjeanspic = {
      uri: 'https://i.pinimg.com/736x/bf/e7/9e/bfe79e58d61f5293f7ff34e184a3a677--mens-slim-jeans-ripped-jeans-men.jpg'
    }
    let blackTpic = {
      uri: 'http://d15udtvdbbfasl.cloudfront.net/catalog/product/zoom_image/09_138686.jpg'
    }
    let vans = {
      uri: 'https://images.vans.com/is/image/Vans/D3HY28-HERO'
    }
    return (
      <ScrollView style={styles.scroll} contentContainerStyle={styles.center}>
        <Image source={stylepic} style={{width: 300, height: 300, resizeMode: 'contain'}}/>
          <View style={styles.product}>
            <View style={styles.product_inner}> 
              <Image source={denimjacketpic} style={{width: 130, height: 130, resizeMode: 'contain'}}/>
              <Text style={{fontSize:10}}>Levis Trucker Jacket</Text>
              <Text style={{fontSize:10}}>$98</Text>
            </View>
            <View style={styles.product_inner}>
              <Image source={denimjeanspic} style={{width: 130, height: 130, resizeMode: 'contain'}}/>
              <Text style={{fontSize:10}}>Diesel Grey Jeans</Text>
              <Text style={{fontSize:10}}>$228</Text>
            </View>
          </View>

          <View style={styles.product}>
            <View style={styles.product_inner}> 
              <Image source={blackTpic} style={{width: 130, height: 130, resizeMode: 'contain'}}/>
              <Text style={{fontSize:10}}>Uniqlo Black T-Shirt</Text>
              <Text style={{fontSize:10}}>$8</Text>
            </View>
            <View style={styles.product_inner}>
              <Image source={vans} style={{width: 130, height: 130, resizeMode: 'contain'}}/>
              <Text style={{fontSize:10}}>Vans Classic Sneaker</Text>
              <Text style={{fontSize:10}}>$118</Text>
            </View>
          </View>
        <View> 

        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    marginTop:100,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
  product_inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },
});


  


