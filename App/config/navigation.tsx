import React from 'react';
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import ListView from '../screens/List';
import Detail from '../screens/Detail'

type ProductStackParamList = {
  List: {title: string}
  Detail: { itemId: number, title: string };
};

export type DetailViewRouteProp = RouteProp<ProductStackParamList, "Detail">

export type ListViewNavigationProp = StackNavigationProp<
    ProductStackParamList,
    "List"
>

const ProductStack = createStackNavigator<ProductStackParamList>();
const ProductsStackScreen = () => {



    return(
    <ProductStack.Navigator>
      <ProductStack.Screen 
      name = "List" 
      component = {ListView} 
      options = {{
        headerTitle: 'Catalog'
      }}
      />
      <ProductStack.Screen 
      name = "Detail" 
      component = {Detail} 
      options = {({ route }) => {

        return {
            headerTitle: `${route?.params?.title}`,
            headerBackTitle: "Back"
        }
      }
      
    }
      />
    </ProductStack.Navigator>
    )
  }

  export default () => {
    return (
      <NavigationContainer>
          <ProductsStackScreen/>
      </NavigationContainer>
    );
}