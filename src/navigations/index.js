
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail'
import Order from '../screens/Order';
import Login from '../screens/Login';

const Stack = createStackNavigator();

function NavigationApp() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Products" component={Products}/>
          <Stack.Screen name="ProductDetail" component={ProductDetail}/>
          <Stack.Screen name="Order" component={Order}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default NavigationApp;