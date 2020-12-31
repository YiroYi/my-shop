import React from 'react';
import { View,
         Text,
         Image,
         StyleSheet,
         TouchableOpacity,
         TouchableNativeFeedback,
         Platform } from 'react-native';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if(Platform.OS === 'android' && Platform.Version >= 21) {
    let TouchableCmp = TouchableNativeFeedback;
  }



  return (
    <View style={styles.product}>
      <TouchableCmp onPress={props.onSelect} useForeground>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: props.image}} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{props.title} </Text>
          <Text style={styles.price}>${props.price}</Text>
        </View>
        <View style={styles.actions}>
          {props.children}
        </View>
      </TouchableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, heigh: 2},
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: 'open-sans-bold'
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'open-sans-bold'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  },
  details: {
    alignItems: 'center',
    height: '17%',
    padding: 10,
  }
});

export default ProductItem;

