import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from "./styles";

const CustomTextInput = ({ label, value, onChangeText,placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    );
};

export default CustomTextInput;
