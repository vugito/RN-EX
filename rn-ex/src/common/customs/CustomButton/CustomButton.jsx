import React from 'react';
import styles from './styles';
import {Pressable, Text} from "react-native";

const CustomButton = ({iconShown, icon, textShown, text, textStyles, buttonStyles}) => {
    return (
        <Pressable style={[styles.container, buttonStyles]}>
            {iconShown && icon}
            {textShown &&
                <Text style={[styles.text, textStyles]}>{text}</Text>}
        </Pressable>
    );
};


export default CustomButton;