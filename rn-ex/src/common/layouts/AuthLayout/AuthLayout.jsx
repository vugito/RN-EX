import React from 'react';
import {View, Text} from "react-native";
import styles from './styles';
const AuthLayout = ({text}) => {
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    );
};

export default AuthLayout;