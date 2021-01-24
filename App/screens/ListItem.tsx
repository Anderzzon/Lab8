import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

export default function ListItem({item, onPress}: {
    item:ListItem,
    onPress:(itemId:number, title: string)=>void
}) {

    const sale = () => {
        if (item?.price > 50 ) {
            return (
                <Text style = {{...styles.price, color: 'green'}}>${(item?.price * 0.8).toFixed(2)}</Text>
            )
        } else {
            return (
                <Text style = {styles.price}>${item?.price}</Text>
            )
        }
    }
        return (
      <TouchableOpacity onPress = {() => onPress(item.id, item.title)}>
        <View style = {styles.listItem}>
            <Image style = {styles.image} source={{ uri: item?.image }} />
            <View style = {styles.infoContainer}>
            <Text style= {styles.title}>{item?.title}</Text>
            {sale()}
            </View>
          
        </View>
      </TouchableOpacity>
    )
}


  const styles = StyleSheet.create({

    listItem: {
    flexDirection: 'row',
      width: '100%',
      alignContent: 'flex-start',
      padding: 20,
    },

    image: {
        margin: 5,
        height: 100,
        width: 100,
    },

    infoContainer: {
        width: '70%',
        marginStart: 10,
        justifyContent: 'space-evenly'
        
    },

    title: {
        fontWeight: 'bold',
        fontSize: 16
    },

    price: {
        fontSize: 16,
    },

  });