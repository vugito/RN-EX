import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import BottomTabNav from "./BottomTabNav";


const Stack = createStackNavigator();

const AuthStackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Group>
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
                <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen}/>
                <Stack.Screen name="Splash" options={{headerShown: false}} component={LoginScreen}/>
            </Stack.Group>
            <Stack.Screen name="Signed" options={{headerShown: false}} component={BottomTabNav}/>

        </Stack.Navigator>
    );
};

export default AuthStackNavigation;