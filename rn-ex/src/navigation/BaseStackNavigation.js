import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";
import GridIcon from "../common/icons/GridIcon/GridIcon";
import HomeStackNavigation from "./HomeStackNavigation";
import BottomTabNavigation from "./BottomTabNavigation";
import ProductItemScreen from "../screens/ProductItemScreen/ProductItemScreen";
import PaymentCardScreen from "../screens/PaymentCardScreen/PaymentCardScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";

const Stack = createStackNavigator();
const BaseStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={'HomeScreen'}>
            <Stack.Screen name="Login"  options={{headerShown: false}} component={LoginScreen} />
            <Stack.Screen name="Register"  options={{headerShown: false}} component={RegisterScreen} />
            <Stack.Screen name="WelcomeScreen"  options={{headerShown: false}} component={SplashScreen} />
            <Stack.Screen name="HomeScreen"  options={{headerShown: false}} component={BottomTabNavigation} />
            <Stack.Screen name="PaymentScreen"  options={{headerShown: false}} component={PaymentCardScreen} />
            <Stack.Screen name="ItemDetailsScreen"  options={{headerShown: false}} component={ProductItemScreen} />
        </Stack.Navigator>
    );
};

export default BaseStackNavigation;



// Login Screen
// Register Screen
// Splash Screen
//
//
//
//
