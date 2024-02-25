import React from 'react';
import {View, Text} from "react-native";
import styles from './styles';
const SignInScreen = ({text}) => {
    return (
        <View style={styles.container}>
            <Text >{text}</Text>
        </View>
    );
};

export default SignInScreen;