import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { ListViewNavigationProp } from '../config/navigation'
import ListItem from './ListItem'

  const Separator = () => <View style={styles.separator} />;
  
  export default ({ navigation }: {navigation:ListViewNavigationProp}) => {

    const [products, setProducts] = useState<ListItem[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => setProducts(json))
            .catch(console.log);
    }, []);
    
    return (
      <FlatList style = {styles.activityList}
        data = {products}
        renderItem = {({item}) =>
            <ListItem 
              //title = {item.title} 
              item={item}
              onPress = {() => {
                navigation.navigate('Detail', {
                  //item: item
                  itemId: item.id,
                  title: item.title
                })
                console.log("ID:", item.id)
            }
          }
            />

        }
        keyExtractor = {(item) => item.id.toString()}
        ItemSeparatorComponent={Separator}
  
        />
    )
  }

  const styles = StyleSheet.create({
  
    activityList: {
      width: '100%',
      backgroundColor: 'white'
    },
    separator: {
      backgroundColor: "#ececec",
      height: 1
    },
  });