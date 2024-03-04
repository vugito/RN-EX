import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import GridIcon from "../common/icons/GridIcon/GridIcon";
import ShoppingCartIconIsFocused from "../common/icons/ShoppingCartIconIsFocused/ShoppingCartIconIsFocused";
import UserIcon from "../common/icons/UserIcon/UserIcon";
import HomeStackNavigation from "./HomeStackNavigation";
import CheckoutScreen from "../screens/CheckoutScreen/CheckoutScreen";
import BasketScreen from "../screens/BasketScreen/BasketScreen";
import FavouritesScreen from "../screens/FavouritesScreen/FavouritesScreen";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfileScreen";

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

            {/* added */}
            <Tab.Screen
                name="Basket"
                component={BasketScreen}
                options={{
                    tabBarLabel: '',
                    title: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <ShoppingCartIconIsFocused/>
                    ),
                }}
            />

            {/* added */}
            <Tab.Screen
                name="Profile"
                component={UserProfileScreen}
                options={{
                    tabBarLabel: '',
                    title: '',
                    headerShown: false,
                    tabBarIcon: () => (
                        <UserIcon/>
                    ),
                }}
            />

            {/* commented */}

            {/*<Tab.Screen*/}
            {/*    name="Favourite"*/}
            {/*    component={FavouritesScreen}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '',*/}
            {/*        title: '',*/}
            {/*        headerShown: false,*/}
            {/*        tabBarIcon: () => (*/}
            {/*            <UserIcon/>*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}

            {/* commented */}

            {/*<Tab.Screen*/}
            {/*    name="ShoppingCartScreen"*/}
            {/*    component={CheckoutScreen}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '',*/}
            {/*        title: '',*/}
            {/*        headerShown: false,*/}
            {/*        tabBarIcon: () => (*/}
            {/*            <ShoppingCartIconIsFocused/>*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}

            {/* commented */}

            {/*<Tab.Screen*/}
            {/*    name="ProfileScreen"*/}
            {/*    component={SplashScreen}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '',*/}
            {/*        title: '',*/}
            {/*        headerShown: false,*/}
            {/*        tabBarIcon: () => (*/}
            {/*            <UserIcon/>*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}

        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
