import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import GridIcon from "../common/icons/GridIcon/GridIcon";
import ShoppingCartIconIsFocused from "../common/icons/ShoppingCartIconIsFocused/ShoppingCartIconIsFocused";
import UserIcon from "../common/icons/UserIcon/UserIcon";
import HomeStackNavigation from "./HomeStackNavigation";
import CheckoutScreen from "../screens/CheckoutScreen/CheckoutScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName={"Home"}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigation}
                options={{
                    tabBarLabel: '',
                    title: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <GridIcon boxInsideColor={"rgba(114,3,255,0.5)"}/>
                    ),
                }}
            />

            <Tab.Screen
                name="ShoppingCartScreen"
                component={CheckoutScreen}
                options={{
                    tabBarLabel: '',
                    title: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <ShoppingCartIconIsFocused/>
                    ),
                }}
            />

            <Tab.Screen
                name="ProfileScreen"
                component={SplashScreen}
                options={{
                    tabBarLabel: '',
                    title: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <UserIcon/>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
