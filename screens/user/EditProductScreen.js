import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';


const EditProductScreen = props => {
  const[title, setTitle] = useState('');
  const[imageUrl, setImageUrl] = useState('');
  const[price, serPrice] = useState('');
  const[description, setDescription] = useState('');

  return(
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input}
                     value={title}
                     onChange={text => setTitle(text)}/>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput style={styles.input}
                     value={imageUrl}
                     onChange={imageUrl => setImageUrl(imageUrl)}/>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput style={styles.input}
                     value={price}
                     onChange={price => setPrice(price)}/>
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input}
                     value={description}
                     onChange={description => setDescription(description)}/>
        </View>
      </View>
    </ScrollView>
  );
}

EditProductScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productId')
    ? 'Edit Product'
    : 'Add Product',
    headerRight: () => <HeaderButtons HeaderButtonComponent = {HeaderButton} >
        <Item title='Save'
          iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
          onPress={() => {
            navData.navigation.navigate('EditProduct');
          }}/>
      </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default EditProductScreen;

