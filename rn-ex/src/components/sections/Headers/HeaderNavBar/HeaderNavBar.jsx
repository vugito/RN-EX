import React from 'react';
import {View, Text, Pressable} from "react-native";
import styles from './styles';
import ChevronLeftIcon from "../../../../common/icons/ChevronLeftIcon/ChevronLeftIcon";

const HeaderNavBar = ({titleShown, title}) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.btnStyle}>
                <ChevronLeftIcon color="#2D0C57"/>
            </Pressable>

            {titleShown &&
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                }
        </View>
    );
};

export default HeaderNavBar;