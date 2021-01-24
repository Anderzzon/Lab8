import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ListViewNavigationProp } from '../config/navigation'
import ListItem from './ListItem'

  // const ListItem = ({item, onPress}) => {
  //   return (
  //     <TouchableOpacity onPress = {onPress}>
  //       <View style = {styles.listItem}    >
  //         <Text>{title}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   )
  // }

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
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    listItem: {
      //width: '100%',
      alignContent: 'flex-start',
      padding: 20,
      margin: 5,
      borderColor: 'grey',
      borderWidth: 2
    },
  
    activityList: {
      width: '100%',
      backgroundColor: 'white'
    },
    separator: {
      backgroundColor: "#ececec",
      height: 1
    },
  });