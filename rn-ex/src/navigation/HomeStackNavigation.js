import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";
import GridIcon from "../common/icons/GridIcon/GridIcon";


const Stack = createStackNavigator();
const HomeStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CategoriesScreen" options={{headerShown: false}} component={CategoriesScreen} />
            <Stack.Screen name="ProductsScreen" options={{headerShown: false}} component={ProductsScreen} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigation;