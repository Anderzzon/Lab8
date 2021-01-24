import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import ListView from '../screens/List';
import Detail from '../screens/Detail'

type ProductStackParamList = {
  List: undefined
  Detail: { itemId: number };
};

export type DetailViewRouteProp = RouteProp<ProductStackParamList, "Detail">

export type ListViewNavigationProp = StackNavigationProp<
    ProductStackParamList,
    "List"
>

const ProductStack = createStackNavigator();
const ProductsStackScreen = () => {
    return(
    <ProductStack.Navigator>
      <ProductStack.Screen 
      name = "ListView" 
      component = {ListView} 
      options = {{
        headerTitle: 'List of activities'
      }}
      />
      <ProductStack.Screen 
      name = "Detail" 
      component = {Detail} 
      options = {({ route }) => {
        return {
            //headerTitle: `${route.params}`,
            headerTitle: "Detail",
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