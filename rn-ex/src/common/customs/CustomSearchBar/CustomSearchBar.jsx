import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from "./styles"
import SearchIcon from "../../icons/SearchIcon/SearchIcon";

const CustomSearchBar = ({ value, onChangeText, onSubmit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <SearchIcon/>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#9586A8"
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmit}
            />
        </View>
    );
};

export default CustomSearchBar;
