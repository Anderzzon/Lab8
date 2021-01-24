import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, View, Image, Button } from "react-native";
import { DetailViewRouteProp } from '../config/navigation'

export default ({ route }: { route: DetailViewRouteProp }) => {

    return (
        <SafeAreaView style= {styles.container}>
        <DetailView route = {route}/>
      </SafeAreaView>
    )
}

const DetailView = ({ route }: { route: DetailViewRouteProp }) => {

  const [product, setProduct] = useState<ListItem | null>(null);

  const itemId = route.params.itemId

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
    .then((response) => response.json())
    .then((json) => setProduct(json))
    .catch((error) => console.log(error))
  }, [])

  const calculatePrice = () => {
    if (product && product?.price > 50 ) {
        return (
            <Text style = {{...styles.price, color: 'green'}}>${(product?.price * 0.8).toFixed(2)}</Text>
        )
    } else {
        return (
            <Text style = {styles.price}>${product?.price}</Text>
        )
    }
}

    return(
      <View style = {styles.detailItem}>
        <Image style = {styles.image} source={{ uri: product?.image }} />
        <View style = {styles.infoContainer}>
          <Text style= {styles.title}>{product?.title} </Text>
          {calculatePrice()}
          <Text style = {{...styles.text, fontWeight: 'bold'}}>Description</Text>
          <Text style = {styles.text}>{product?.description}</Text>
          <Text style = {{...styles.text, color: 'grey', marginTop: 10, marginBottom: 20}}>Category: {product?.category}</Text>
        </View>
        <Button
        title = "Add to Cart"
        onPress = {() => {
          console.log("Added to cart")
          console.log("Params title", route.params.title)
      }}
        />
      </View>
      
    )
  }

  const styles = StyleSheet.create({

        container: {
      flex: 1,
      alignItems: 'center',
    },

    detailItem: {
        width: '100%',
        padding: 20,
        margin: 5,
      },
  
      image: {
        alignSelf: 'center',
          margin: 5,
          height: 200,
          width: 200,
      },
  
      infoContainer: {
        alignItems: 'flex-start',
      },
  
      title: {
          fontWeight: 'bold',
          fontSize: 21,
          marginTop: 10,
          marginBottom: 10,
      },
  
      price: {
          fontSize: 20,
          marginTop: 10,
          marginBottom: 10,
      },

      text: {
        fontSize: 14,
      }
  });