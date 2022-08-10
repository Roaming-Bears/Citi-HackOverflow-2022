import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header'
import Bankers from "./dashboard/Bankers"

import animations from './invest/questionnaire.js'

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './dashboard/ProductsList';
import { ProductDetails } from './dashboard/ProductDetails';

const Stack = createNativeStackNavigator();
class App extends Component {

  render() {

    const headerItems = [
      {
        label: "Home",
        href: "/home"
      },
      {
        label: "Invest",
        href: "/invest"
      },
      {
        label: "Community",
        href: "/community"
      },
      // {
      //   label: "Sign up/Sign in",
      //   href: "/login"
      // },
      {
        label: "Dashboard",
        href: "/dashboard"
      },
    ];

    return (
      <div>
        <Header headerItems={headerItems} />
        <Routes>
          <Route exact path="dashboard" element={<Bankers />} />
          <Route exact path="invest" element={<animations />} />
        </Routes>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Products' component={ProductsList}
                          options={() => ({
                            title: 'Products',
                            headerTitleStyle: styles.headerTitle
                          })}/>
            <Stack.Screen name='ProductDetails' component={ProductDetails}
                          options={() => ({
                            title: 'Product details',
                            headerTitleStyle: styles.headerTitle
                          })} />
          </Stack.Navigator>
        </NavigationContainer>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;
