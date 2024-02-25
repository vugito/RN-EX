import React from 'react';
import {View, Text} from "react-native";
import styles from './styles';
const PaymentScreen = ({text}) => {
    return (
        <View style={styles.container}>
            <Text >{text}</Text>
        </View>
    );
};

export default PaymentScreen;